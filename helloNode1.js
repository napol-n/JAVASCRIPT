const http = require('http');
const url = require('url');

http.createServer((req, res) => {
    const q = url.parse(req.url, true);
    const pathname = q.pathname;
    const query = q.query;

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write(`URL => ${req.url}\n`);
    res.write(`pathname => ${pathname}\n`);
    res.write(`name => name: ${query.name}\n`);
    res.write(`subject => subject: ${query.subject}\n`);
    res.write(`score => score: ${query.score}\n`);
    res.end();
}).listen(3333);

console.log("Server running at http://localhost:3333/");
