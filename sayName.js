//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

function Person(name, age) {
  this.name = name;
  this.age = age;
}

//code here


//Now create three instances of Person with data you make up

var person1 = new Person('jared', 29);
var person2 = new Person('patrick', 30);
var person3 = new Person('Jason', '14 in bird years');
//code here


//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

Person.prototype.sayName = function () {
  alert(this.name + ' ' + this.age);
}

person1.sayName();
//code here