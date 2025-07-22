const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer((req, res) => {
    const q = url.parse(req.url, true).query;
    const file1 = q.file1;
    const file2 = q.file2;

    console.log(`Original file: ${file1}`);
    console.log(`New file: ${file2}`);

    fs.rename(file1, file2, (err) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.write('File rename failed.\n');
            res.end();
        } else {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.write(`Renamed ${file1} to ${file2}\n`);
            res.end();
        }
    });
}).listen(3333);

console.log("Server running at http://localhost:3333/");
