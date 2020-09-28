const fs = require("fs");
const utils = require("../note/utils.js");

// const sum = utils.sum(3, 2);
// console.log(sum);

fs.open("notes.txt", "r+", function (err, fd) {
	if (err) {
		console.log(err);
	} else {
		console.log("opened file successfully");
		var bufr = new Buffer.alloc(1024);
		fs.ftruncate(fd, 10, function (err) {
			//deletes content after 10th byte
			if (err) {
				console.log(err);
			} else console.log("truncated file successfully");
		});

		fs.read(fd, bufr, 0, bufr.length, 0, function (err, bytes) {
			if (err) {
				console.log(err);
			} else {
				if (bytes > 0) console.log(bufr.slice(0, bytes).toString());
			}
		});
		fs.close(fd, function (err) {
			if (err) console.log(err);
			else console.log("file closed successfully");
		});
	}
});
//fs.writeFileSync("notes.txt", "this was created by node.js!");
fs.unlink("notes.txt", function (err) {
	if (err) console.log(err);
	else console.log("del eted file");
});
