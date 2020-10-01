var http = require("http");
var fetch = require("node-fetch");

//fetch json file from server using GET
fetch("http://localhost:5000/sample.json", {
	method: "POST",
	body: JSON.stringify({ name: "modified value", col: "MIT" }),
	headers: { "Content-Type": "application/json" },
})
	//.then((res) => res.json())
	.then((res) => console.log(res));
