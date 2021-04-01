function handleRequest(request) {
    const { pathname } = new URL(request.url);
    
    if (pathname.startsWith("/robots.txt")) {
        return new Response("*", { headers: { 'content-type': 'text/plain; charset=UTF-8' } })
    }

    if (pathname.startsWith("/big")) {
        const html = getHtml('BIG', 'sauce');
  
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
        const html = getHtml('SAUCE', 'big');
    
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
        <h1>Big Sauce</h1>
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
  
  function getHtml(name, to) {
      return `
    <html>
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta name="title" content="${name}">
            <meta property="og:site_name" content="BIG SAUCE">
            <meta property="og:locale" content="en_US">
            <meta property="og:url" content="https://fat-goose-36.deno.dev/sauce">
            <meta name="twitter:site" content="https://fat-goose-36.deno.dev">
            <meta data-hid="title" name="title" content="${name} | deno.deploy.test">
            <meta data-hid="description" name="description" content="${name.repeat(10)}">
            <meta property="og:type" content="website">
            <meta property="og:title" content="${name} | deno.deploy.test">
            <meta property="og:description" content="${name.repeat(10)}">
            <meta property="og:image" content="https://clipartion.com/wp-content/uploads/2015/11/tomato-clipart-fruit-khup-spaghetti-sauce-tomato.png">
            <meta name="twitter:card" content="summary">
            <meta name="twitter:title" content="${name} | deno.deploy.test">
            <meta name="twitter:description" content="${name.repeat(10)}">
            <meta name="twitter:image" content="https://clipartion.com/wp-content/uploads/2015/11/tomato-clipart-fruit-khup-spaghetti-sauce-tomato.png">
            <meta name="twitter:image:alt" content="tomat">
            <meta http-equiv="refresh" content="1.5;/${to}">
            <title>${name}</title>
            <style>html,body {margin:0;padding:0;}body{height:100%;min-height:100vh;display:grid;place-content:center;background: red;}</style>
        </head>
        <body>
            <div style="height: 100%; width: 100%; font-size: 4rem;background: red; color: white;">${name}</div>
        </body>
    </html>
      `.split('\n').join('');
  }
  addEventListener("fetch", (event) => {
    event.respondWith(handleRequest(event.request));
  });