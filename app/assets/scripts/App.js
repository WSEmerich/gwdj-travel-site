var $ = require('jquery');
var Person = require("./modules/Person.js");



var john = new Person("John Buck", "camo");
john.greet();
var jane = new Person("Jane Doe", "pink camo");
jane.greet();
