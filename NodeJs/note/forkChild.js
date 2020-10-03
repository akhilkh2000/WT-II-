process.on("message", (msg) => {
	console.log(`msg from parent :${msg}`);
});

//contimously send msgs from child
let counter = 0;
setInterval(() => {
	//send message to the parent
	process.send({ counter: counter++ });
}, 1000);
