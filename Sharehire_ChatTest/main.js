var url = require('url');
var fileSystem = require('fs');

function renderHtml(filePath, response) {
    fileSystem.readFile(filePath, function (error, data) {
        if (error) {
            response.writeHead(404);
            response.write("File not found!");
        }
        else {
            response.write(data);
        }

        response.end();
    });
}

module.exports = {
    handleRequest: function (request, response) {
        response.writeHead(200, { 'Content-Type': 'text/html' });

        var urlRoute = url.parse(request.url).pathname;

        switch (urlRoute) {
            case '/host':
                renderHtml('./host.html', response);
                break;
            case '/client':
                renderHtml('./client.html', response);
                break;
            default:
                response.writeHead(404);
                response.write('Page not found');
                response.end();
        }
    }
}