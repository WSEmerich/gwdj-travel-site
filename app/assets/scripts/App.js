var $ = require('jquery');
// var Person = require("./modules/Person.js");
import Person from './modules/Person.js';


class Adult extends Person {

  payTaxes() {
    console.log(this.name + " owes $100.00 taxes.");
    
  }

}

var john = new Person("John Buck", "camo");
john.greet();
var jane = new Adult("Jane Doe", "pink camo!");
jane.greet();
jane.payTaxes();