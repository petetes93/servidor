const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
    const path = request.url;

    console.log(path);

    if (path === '/' || path === '/index.html') {
        response.statusCode = 200;
        response.write(fs.readFileSync('./index.html', 'utf-8'));
        response.end();
    } else if (path === '/style.css') {
        response.statusCode = 200;
        response.write(fs.readFileSync('./style.css', 'utf-8'));
        response.end();
    } else if (path === '/biografia.html') {
        response.statusCode = 200;
        response.write(fs.readFileSync('./biografia.html', 'utf-8'));
        response.end();
    } else if (path === '/contacto.html') {
        response.statusCode =200;
        response.write(fs.readFileSync('./contacto.html', 'utf-8'));
        response.end();
    } else if (path === '/portfolio.html') {
        response.statusCode = 200;
        response.write(fs.readFileSync('./portfolio.html', 'utf-8'));
        response.end();
    } else {
        response.statusCode = 404;
        response.write(fs.readFileSync('./404.html', 'utf-8'));
        response.end();
    }
});

server.listen(4001, () => console.log('Server on...'));
