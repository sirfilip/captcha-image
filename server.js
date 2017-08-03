const cg = require('captcha-generator');
const url = require('url');

require('http').createServer(function(req, res) {
    var text = url.parse(req.url, true).query.text || cg.createPlaintext(6);
    var cimg = cg.generate({
        text: text,
        width: 500,
        height: 200,
        fontSize: 200
    });
    res.writeHead(200, {
        'Content-type': 'image/png'
    });
    res.end(cimg.buffer);
}).listen(3000, function() {
    console.log("Server started on: http://localhost:3000");
});
