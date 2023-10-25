const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
    const path = request.url;

    console.log(path);

    if (path === '/' || path === '/index.html') {
        response.statusCode = 200;
        response.write(fs.readFileSync('index.html', 'utf-8'));
        response.end();
    } else if (path === '/css/styles.css') {
        response.statusCode = 200;
        response.write(fs.readFileSync('css/styles.css', 'utf-8'));
        response.end();
    } else if (path === '/html/biografia.html') {
        response.statusCode = 200;
        response.write(fs.readFileSync('html/biografia.html', 'utf-8'));
        response.end();
    } else if (path === '/html/contacto.html') {
        response.statusCode =200;
        response.write(fs.readFileSync('html/contacto.html', 'utf-8'));
        response.end();
    } else if (path === '/html/portfolio.html') {
        response.statusCode = 200;
        response.write(fs.readFileSync('html/portfolio.html', 'utf-8'));
        response.end();
    } else {
        response.statusCode = 404;
        response.write(fs.readFileSync('html/404.html', 'utf-8'));
        response.end();
    }
});

server.listen(4001, () => console.log('Server on...'));
