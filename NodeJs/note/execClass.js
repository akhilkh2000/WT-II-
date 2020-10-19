const fs = require("fs");
const childProcess = require("child_process");
const { stdout, stderr } = require("process");
var workerProcess = childProcess.exec(
	"node execChild.js",
	(err, stdout, stderr) => {
		if (err) {
			console.error(err);
			return;
		}
		console.log("worker process created successfully");
		console.log(`stdout: ${stdout}`);
		console.log(`stderr: ${stderr}`);
	}
);
