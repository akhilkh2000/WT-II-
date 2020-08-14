/* //DAY 1
// Method1 (Literal way) (single instance)
let item = {
	itemName: "Shoes",
	itemPrice: "2000",
	show: function () {
		// we use this because lexical scope changes
		document.write(`Name: ${this.itemName} is price at ${this.itemPrice}`);
	},
};

item.show();

// Method2 : constructor way ( when multiple types of the same properties are needed we use this way to create)
function BookItem(title, author, stock) {
	(this.title = title), (this.author = author), (this.stock = stock);
}

let book1 = new BookItem("book1", "me", 30);
let book2 = new BookItem("book2", "you", 50);

console.log(`title : ${book1.title} copies : ${book1.stock}`);
document.write(` <br><br> title : ${book1.title} copies : ${book1.stock}`);

// using new Object();
let item3 = new Object();
//basically Array inherits all the properties of the global object Object() from prototype chain
var arr = new Array(); // inbuilt

//slet item1 = new item(); // error as item is not a constructor its a literal.

//method 4
let item2 = Object.create(item);
//with custom properties
let item4 = Object.create(item, {
	itemName: { value: "Nike" },
	itemPrice: { value: "3000" },
});

item2.show();
item4.show();
 */

// DAY 2

/* function Book_item(title, author, stock) {
	this.title = title;
	this.author = author;
	this.stock = stock;
	// this.borrow = function () {
	// 	alert(--this.stock);
	// };
}

// to optimise we attatch methods to the prototype object
//this wont be copied to all instances bk1 and bk2 hence saving memory . They will just refer(point) to the prototype object
Book_item.prototype.borrow = function () {
	alert(--this.stock);
};

// let bk1 = new Book_item("ML", "TOM", 45);
// let bk2 = new Book_item("JS", "Nicholas", 35);

// console.log(bk1); // we will have copy of all items and methods inherited from the constructor and this wastes memory
// console.log(bk1.stock);
// bk1.borrow();
// console.log(bk1.stock);

// constructor stealing
// call -  calls the  method taking the owner as an argument.
function returned_books(title, author, stock) {
	Book_item.call(this, arguments[0], arguments[1], arguments[2]);
	//Book_item.apply(this, [title, author, stock]);
}
//apply - does the same thing but second parameter is an array

//designates book_item as parent of returned_books
returned_books.prototype = new Book_item();
let rb1 = new returned_books("book1", "a", 34);
let rb2 = new returned_books("book2", "b", 74);

rb1.borrow(); */

class item {
	constructor(name) {
		this.itemName = name;
	}

	show() {
		alert(this.itemName);
	}

	static staticShow() {
		console.log("this is static");
	}
}

let i1 = new item("samsung");
i1.show();
//static methods can be accessed using class name
item.staticShow();
