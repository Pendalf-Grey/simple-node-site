const http = require("http");

const PORT = 3000;

const html = `<!doctype html>
<html lang="ru">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Node.js Site</title>
  <style>
    body { margin: 0; min-height: 100vh; display: grid; place-items: center; font-family: Arial, sans-serif; background: #fff8ed; color: #263238; }
    main { max-width: 680px; padding: 48px 24px; text-align: center; }
    h1 { margin: 0 0 12px; font-size: clamp(36px, 7vw, 68px); }
    p { margin: 0; font-size: 20px; line-height: 1.5; }
  </style>
</head>
<body>
  <main>
    <h1>Node.js Site</h1>
    <p>Простой одностраничный сайт на Node.js.</p>
  </main>
</body>
</html>`;

const server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  response.end(html);
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
