const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer((req, res) => {
    const q = url.parse(req.url, true).query;

    const output =
        `name => name: ${q.name}\n` +
        `subject => subject: ${q.subject}\n` +
        `score => score: ${q.score}\n`;

    fs.writeFile('hello.htm', output, (err) => {
        if (err) throw err;

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write(output);
        res.end();
    });
}).listen(3333);

console.log("Server running at http://localhost:3333/");
