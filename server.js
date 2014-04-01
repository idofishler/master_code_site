var http = require('http');
var filed = require('filed');

server = http.createServer(function(req, resp) {
	if (req.url === "/") {
		req.pipe(filed('./home.html')).pipe(resp);
	} else {
		req.pipe(filed("./" + req.url)).pipe(resp);
	}
});

var port = Number(process.env.PORT || 5000);

 server.listen(port, function() {
	console.log("Server started on " + port);
});