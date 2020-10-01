//http module creating a web server
var http = require("http");
var fs = require("fs");
var url = require("url"); //to break url into parts and functions related
var MongoClient = require("mongodb").MongoClient;
//create server
http
	.createServer(function (req, res) {
		var pathname = url.parse(req.url).pathname;
		console.log("received request for pathname" + pathname);
		if (req.method == "GET") {
			console.log("executing mongo");
			// connect to mongodb
			MongoClient.connect(
				"mongodb://localhost:27017",
				{ useUnifiedTopology: true },
				(err, client) => {
					if (err) {
						console.log("error connecting to DB");
					} else {
						console.log("connected to DB!");
						const db = client.db("pes");
						db.collection("students")
							.find({})
							.toArray({
								function(err, docs) {
									//all documents peratining to the collection are returned in form of array
									res.writeHead(200, { "Content-Type": "application/json" });
									res.write(JSON.stringify(docs));
									client.close();
									res.end(); //send to client
								},
							});
					}
				}
			);
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
