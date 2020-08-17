var obj = {
	getElectives: function () {
		let dep = document.getElementById("dept");
		if (!dep.value) {
			alert("Enter a department!");
		} else {
			let helper = document.getElementById("ifr");
			helper.src = "hiddenFrames2.php?dept=" + dep.value;
		}
	},

	populateElectives: function (electives) {
		//the string returned by the server is ';' is seperated
		//the 0th index is the dept name
		console.log(electives);
		let returnedArray = electives.split(";");
		document.getElementById("dept").value = returnedArray[0];
		//loop through electives
		let sel = document.getElementById("el");
		sel.innerHTML = "";
		returnedArray.forEach((elective) => {
			let option = document.createElement("option");
			option.innerHTML = elective;
			sel.appendChild(option);
		});
	},
};
