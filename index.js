addEventListener("fetch", (event) => {
  event.respondWith(
    new Response("<h2>ajcwebdev-deno</h2>", {
      status: 200,
      headers: { "content-type": "text/html" },
    }),
  )
})
