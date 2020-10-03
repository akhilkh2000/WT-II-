var cluster = require("cluster");
const { sign } = require("crypto");
var http = require("http");

if (cluster.isMaster) {
	//master process
	//we can create only logical cores number of processes to run parallel
	var numWorkers = require("os").cpus().length; //number of logical cores available on hardware
	console.log(`Master cluster is getting setup${numWorkers}workers`);
	//fork 4 worker processes
	for (var i = 0; i < numWorkers; i++) {
		cluster.fork();
	}

	//online and exit events of cluster
	cluster.on("online", (worker) => {
		console.log(`worker ${worker.process.pid} is online`);
	});

	cluster.on("exit", (worker, code, signal) => {
		console.log(
			`worker${worker.process.pid}died with code${code}signal :${signal}`
		);
		console.log("starting new worker");
		cluster.fork();
	});
} else {
	// worker process
	http
		.createServer(function (req, res) {
			res.writeHead(200);
			res.end("Process" + process.pid + "says hi");
			console.log("process" + process.pid + "handled the request");
		})
		.listen(5000);
}
