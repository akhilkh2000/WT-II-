var emitter = require("events").EventEmitter;

/*
var e = new emitter();

 e.on("connection", function (data) {
	console.log("event fired: " + data);
});

//events are case sensitive
e.emit("connection", "connection event!");

//same as on listener can be used interchangably
e.addListener("Close", function () {
	console.log("connection is closed");
});

e.emit("Close");
 */

//1. returning an event emitter from a function
/* function processor(n) {
	var e = new emitter();
	setTimeout(function () {
		for (var i = 1; i <= n; i++) {
			e.emit("beforeProcess", i);
			console.log("process-number:" + i);
			e.emit("afterProcess", i);
		}
	}, 2000);

	return e;
}

var pro = processor(3);
pro.on("beforeProcess", (data) => {
	console.log("starting process" + data);
});

pro.on("afterProcess", (data) => {
	console.log("ending process" + data);
}); */

//2. make a constructor function that extends the event emitter class
var emitter = require("events").EventEmitter;
var util = require("util"); //used to combine multiple classes
function processor(n) {
	var obj = this;
	setTimeout(function () {
		for (var i = 1; i <= n; i++) {
			obj.emit("before", i);
			console.log("process number:" + i);
			obj.emit("after", i);
		}
	}, 2000);
	return this;
}

util.inherits(processor, emitter); //(child, parent)

var pro = new processor(3); //create object of processor constructor
pro.on("before", (data) => {
	console.log("starting process:" + data);
});

pro.on("after", (data) => {
	console.log("ending process:" + data);
});
