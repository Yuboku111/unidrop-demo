// UniDrop Service Worker — Web Push 通知 / deep link / app badge / オフライン
//
// 設計方針（本番安全性を最優先した保守的キャッシュ）:
// - ナビゲーション(HTML)は network-first。オンライン時は常に最新を返すため
//   サーバ側 SEO 注入・デプロイ後の stale HTML 事故が起きない。取得した HTML は
//   最後の1枚だけキャッシュし、オフライン起動時のフォールバックに使う。
// - ハッシュ付き不変アセット(/assets/*)のみ cache-first。ファイル名が
//   content hash なのでデプロイで名前が変わり、古いものは参照されなくなる。
// - 上記以外(API 等)は一切介入しない（素通し）。
// - キャッシュ版を上げると activate で旧キャッシュを破棄する（キルスイッチ）。

const SW_CACHE_VERSION = "v1-2026-06-14";
const RUNTIME_CACHE = `unidrop-rt-${SW_CACHE_VERSION}`;
const OFFLINE_URL = "/offline.html";
const OFFLINE_FALLBACK_KEY = "__offline_fallback__";
const PRECACHE_URLS = [OFFLINE_URL, "/branding/logo/favicon-192.png"];

self.addEventListener("install", event => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(RUNTIME_CACHE);
      await cache.addAll(PRECACHE_URLS);
      await self.skipWaiting();
    })()
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys
          .filter(key => key.startsWith("unidrop-rt-") && key !== RUNTIME_CACHE)
          .map(key => caches.delete(key))
      );
      await self.clients.claim();
    })()
  );
});

self.addEventListener("fetch", event => {
  const request = event.request;
  if (request.method !== "GET") return;

  let url;
  try {
    url = new URL(request.url);
  } catch {
    return;
  }
  if (url.origin !== self.location.origin) return;

  // ナビゲーション: network-first → 取得HTMLを最後の1枚としてキャッシュ →
  // オフライン時はそのHTML、無ければ offline.html を返す。
  if (request.mode === "navigate") {
    event.respondWith(
      (async () => {
        try {
          const response = await fetch(request);
          if (response && response.ok) {
            const cache = await caches.open(RUNTIME_CACHE);
            cache.put(OFFLINE_FALLBACK_KEY, response.clone());
          }
          return response;
        } catch {
          const cache = await caches.open(RUNTIME_CACHE);
          const lastGood = await cache.match(OFFLINE_FALLBACK_KEY);
          if (lastGood) return lastGood;
          const offline = await cache.match(OFFLINE_URL);
          return offline || Response.error();
        }
      })()
    );
    return;
  }

  // ハッシュ付き不変アセットのみ cache-first。
  if (url.pathname.startsWith("/assets/")) {
    event.respondWith(
      (async () => {
        const cache = await caches.open(RUNTIME_CACHE);
        const cached = await cache.match(request);
        if (cached) return cached;
        const response = await fetch(request);
        if (response && response.ok) cache.put(request, response.clone());
        return response;
      })()
    );
    return;
  }

  // それ以外（API 等）は介入しない。
});

function readPayload(event) {
  if (!event.data) return {};
  try {
    return event.data.json();
  } catch {
    return { body: event.data.text() };
  }
}

function normalizeNotification(payload) {
  const type = payload.type || "general";

  if (type === "chat_unread" || type === "chat_expiring") {
    return {
      title: "UniDropに新しいメッセージが届いています",
      body: "チャットは7日間だけ開けます",
      url: payload.url || "/chat",
      tag: payload.tag || "unidrop-chat",
      renotify: payload.renotify ?? false,
      type,
    };
  }

  if (type === "drop_ready" || type === "match_delivered") {
    return {
      title: "今週のDropが届きました",
      body: "相性の合う相手を見にいきましょう",
      url: payload.url || "/drop",
      tag: payload.tag || "unidrop-drop-ready",
      type,
    };
  }

  return {
    title: payload.title || "UniDrop",
    body: payload.body || "新しい通知があります",
    url: payload.url || "/app",
    tag: payload.tag,
    type,
  };
}

async function syncAppBadge(unreadCount) {
  const count = Number(unreadCount);
  const nav = self.navigator;
  if (!Number.isFinite(count) || !nav) return;

  if (count > 0 && "setAppBadge" in nav) {
    await nav.setAppBadge(Math.floor(count));
    return;
  }

  if (count <= 0 && "clearAppBadge" in nav) {
    await nav.clearAppBadge();
  }
}

self.addEventListener("push", event => {
  event.waitUntil(
    (async () => {
      const payload = readPayload(event);
      const notification = normalizeNotification(payload);
      await syncAppBadge(payload.unreadCount);

      await self.registration.showNotification(notification.title, {
        body: notification.body,
        icon: payload.icon || "/branding/logo/favicon-192.png",
        badge: payload.badge || "/branding/logo/favicon-32.png",
        tag: notification.tag,
        renotify: notification.renotify ?? false,
        data: {
          url: notification.url,
          type: notification.type,
          notificationId: payload.notificationId,
        },
      });
    })()
  );
});

self.addEventListener("notificationclick", event => {
  event.notification.close();
  const targetPath = event.notification.data?.url || "/app";
  const targetUrl = new URL(targetPath, self.location.origin).href;

  event.waitUntil(
    clients
      .matchAll({ type: "window", includeUncontrolled: true })
      .then(windowClients => {
        for (const client of windowClients) {
          const clientUrl = new URL(client.url);
          if (clientUrl.origin !== self.location.origin) continue;
          if ("navigate" in client) {
            return client.navigate(targetUrl).then(() => client.focus());
          }
          if ("focus" in client) {
            return client.focus();
          }
        }
        return clients.openWindow(targetUrl);
      })
  );
});
