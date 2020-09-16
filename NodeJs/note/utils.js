console.log("utils.js file");

const add = function (a, b) {
	return a + b;
};

//only one module.exports can be there so for multiple we have to make an object
module.exports = {
	name: "Akhil",
	sum: add,
};

//another way to export
/* exports.add = function(a,b){
    return a + b;
} */
