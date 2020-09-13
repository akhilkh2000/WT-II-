function checkUser() {
	const user = document.getElementById("username");
	let frame = document.getElementById("helper");
	//get request to server side script
	frame.src = "hiddenFrames.php?uid=" + user.value;
}

function setStatus(status) {
	//
	let sp = document.getElementById("password");
	sp.value = status.split(";")[1];
	sp.style.color = "red";
}
