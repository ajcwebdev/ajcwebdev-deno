addEventListener("fetch", (event) => {
  event.respondWith(
    new Response("ajcwebdev-deno", {
      status: 200,
      headers: { "content-type": "text/plain" },
    }),
  )
})