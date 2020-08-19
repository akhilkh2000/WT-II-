function chkusr() {
	usr = document.getElementById("usr");
	pwd = document.getElementById("pwd");
	if (!usr.value) {
		alert("nothing to check");
	}

	// create image dynamically
	var img = document.createElement("img");
	console.log(usr.value);
	img.src = "image.php?uid =" + usr.value;
	img.onload = success;
	img.onerror = failure;
}

function success() {
	if (img.width == 1) {
		pwd.value = "user already exists";
	} else {
		pwd.value = "username available";
	}
}

function failure() {
	console.error("image loading failed!");
}
