//create buffers
// var bufr = new Buffer.alloc(256);
// // len = bufr.write("hello"); //returns length
// for (let i = 0; i < 26; i++) {
// 	bufr[i] = i + 97; //ascii values
// }

// console.log(bufr.toString("ascii", 0, 6)); //just like slice includes 0 and not 6

// var bufr = new Buffer.alloc(256);
// var bufr1 = new Buffer.alloc(12, "hello world ");
// var bufr2 = new Buffer.alloc(17, "the second buffer");
// var bufr = Buffer.concat([bufr1, bufr2]);
// console.log(bufr.toString());
// var res = bufr1.compare(bufr2);
// console.log(res); //bufr1 comes before bufr2 it gives -1 (alphabetical order in ascii)

// bufr1.copy(bufr2);
// console.log(bufr1.toString());
// console.log(bufr2.toString());

const fs = require("fs");
//READABLE STREAM :

// var data = "";

// //create readable stream
// var readerStream = fs.createReadStream("notes.txt");
// //set encoding
// readerStream.setEncoding("UTF8");
// //handle stream events
// readerStream.on("data", function (chunk) {
// 	data += chunk;
// 	console.log("chunk: " + chunk);
// });
// readerStream.on("end", function () {
// 	console.log("end of stream: " + data);
// });

// readerStream.on("error", function (err) {
// 	console.log(err);
// });

// console.log("end of program");

// WRITEABLE STREAM
/* var data = "info written using streams";
var writeStream = fs.createWriteStream("output.txt");
writeStream.write(data, "UTF8");

//mark the end of file to be set for write stream
writeStream.end();
writeStream.on("finish", function () {
	console.log("end of stream!");
});

writeStream.on("error", function (err) {
	console.log(err);
});

console.log("end of program"); */

// PIPING STREAMS
/* var readerStream = fs.createReadStream("notes.txt");
var writeStream = fs.createWriteStream("output.txt");

//pipe these two streams
readerStream.pipe(writeStream); //read from notes.txt and write to output.txt
console.log("end of program");
 */

//chain of streams (use zlib to zip or unzip a file)
var zlib = require("zlib");
var readerStream = fs.createReadStream("notes.txt");
readerStream
	.pipe(zlib.createGzip())
	.pipe(fs.createWriteStream("notes.txt.gzip"));
console.log("ended program");
