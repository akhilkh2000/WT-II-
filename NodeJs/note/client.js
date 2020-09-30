// var http = require("http");
// //options for request header
// const options = {
// 	host: "localhost",
// 	port: "5000",
// 	path: "./example.html",
// };

// //callback that processes the response
// var callback = function (res) {
// 	console.log("in callback");
// 	let body = "";
// 	res.on("data", function (data) {
// 		body += data;
// 	});

// 	res.on("end", function () {
// 		console.log(body);
// 	});
// };

// //make a request
// var req = http.request(options, callback);
// req.on("error", (e) => {
// 	console.error(`problem with request: ${e.message}`);
// });
// req.end();
