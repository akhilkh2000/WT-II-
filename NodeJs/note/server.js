//http module creating a web server
var http = require("http");
var fs = require("fs");
var url = require("url"); //to break url into parts and functions related

//create server
http
	.createServer(function (req, res) {
		var pathname = url.parse(req.url).pathname;
		console.log("received request for pathname" + pathname);
		fs.readFile(pathname.substr(1), (err, data) => {
			if (err) {
				console.log(err);
				res.writeHead(404, { "Content-Type": "text/html" });
			} else {
				console.log("success");
				res.writeHead(200, { "Content-Type": "text/html" });
				res.write(data.toString()); // this is the response that will be displayed
			}

			//send to client and end the response
			res.end();
		});
	})
	.listen(5000);

console.log("server is listening on port 5000");
