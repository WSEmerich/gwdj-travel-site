// console.log("Hello! My name is John Doe, and my favorite color is blue!");
// console.log("Hello! My name is Jane Smith, and my favorite color is green!");

// person(john.name, john.favColor);
// person("Jane Smith", "green");

// var johnName = "John Doe";
// var johnFavColor = "blue";

// console.log("Hello! My name is " + name + ", and my favorite color is " + favColor + "!");

// var john = {
//     name: "John Buck",
//     favColor: "camo",
//     greet: function() {
//         console.log("Hello! My name is " + john.name + ", and my favorite color is " + john.favColor + ".");
//     }
// };

// var jane = {
//     name: "Jane Doe",
//     favColor: "headlights",
//     greet: function() {
//         console.log("Hello! My name is " + jane.name + ", and my favorite color is " + jane.favColor + ".");
//     }
// };

// john.greet();
// jane.greet();

function Person(fullName, favColor) {
    this.name = fullName;
    this.favoriteColor = favColor;
    this.greet = function() {
        console.log("Hello there! My name is " + this.name + " and my favorite color is " + this.favoriteColor + ".");        
    }
}

var john = new Person("John Buck", "camo");
john.greet();
var jane = new Person("Jane Doe", "headlights");
jane.greet();

