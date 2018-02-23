// console.log("Hello! My name is John Doe, and my favorite color is blue!");
// console.log("Hello! My name is Jane Smith, and my favorite color is green!");

function person(name, favColor) {
    console.log("Hello! My name is " + name + ", and my favorite color is " + favColor + "!");
};

// var johnName = "John Doe";
// var johnFavColor = "blue";

var john = {
    name: "John Buck",
    favColor: "camo"

};

person(john.name, john.favColor);
person("Jane Smith", "green");
