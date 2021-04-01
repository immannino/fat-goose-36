function handleRequest(request) {
    const { pathname } = new URL(request.url);
  
    if (pathname.startsWith("/big")) {
      const html = `<html><head><meta http-equiv="refresh" content="1.5;/sauce"></head>
        <h1 style="background: red; color: white;">BIG</h1>
        </html>`;
  
      return new Response(html, {
        headers: {
          // The interpretation of the body of the response by the client depends
          // on the 'content-type' header.
          // The "text/html" part implies to the client that the content is HTML
          // and the "charset=UTF-8" part implies to the client that the content
          // is encoded using UTF-8.
          "content-type": "text/html; charset=UTF-8",
        },
      });
    }
  
    if (pathname.startsWith("/sauce")) {
        const html = `<html><head><meta http-equiv="refresh" content="1.5;/big"></head>
          <h1 style="background: red; color: white;">SAUCE</h1>
          </html>`;
    
        return new Response(html, {
          headers: {
            // The interpretation of the body of the response by the client depends
            // on the 'content-type' header.
            // The "text/html" part implies to the client that the content is HTML
            // and the "charset=UTF-8" part implies to the client that the content
            // is encoded using UTF-8.
            "content-type": "text/html; charset=UTF-8",
          },
        });
    }
  
    return new Response(
      `<body
        align="center"
        style="font-family: Avenir, Helvetica, Arial, sans-serif; font-size: 1.5rem;"
      >
        <h1>Return JSON and/or HTML Example</h1>
        <p>
          <a href="/big">start</a>
        </p>
      </body>`,
      {
        headers: {
          "content-type": "text/html; charset=UTF-8",
        },
      },
    );
  }
  
  addEventListener("fetch", (event) => {
    event.respondWith(handleRequest(event.request));
  });