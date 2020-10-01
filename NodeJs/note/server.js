//http module creating a web server
var http = require("http");
var fs = require("fs");
var url = require("url"); //to break url into parts and functions related

//create server
http
	.createServer(function (req, res) {
		var pathname = url.parse(req.url).pathname;
		console.log("received request for pathname" + pathname);
		if (req.method == "GET") {
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
		} else {
			//request is a POST request
			let body = [];
			req
				.on("data", (chunk) => {
					body.push(chunk);
				})
				.on("end", () => {
					//body has entire request body stored in it
					//make it in string form
					body = Buffer.concat(body).toString();
				});
			//write to JSON file
			fs.writeFile(pathname.substr(1), body, (err, resp) => {
				res.writeHead(200, { "Content-Type": "text/html" });
				res.end();
			});
		}
	})
	.listen(5000);

console.log("server is listening on port 5000");
