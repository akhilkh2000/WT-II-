const { fork } = require("child_process");
const forked = fork("forkChild.js");

forked.on("message", (msg) => {
	console.log("message from child", msg);
});

forked.send("HELLO WORLD");
