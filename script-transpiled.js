'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// ////////////////////////////////////////////////////////
// // Lecture : let and const

// // ES5
// var name5 = 'Shem Lim';
// var age5 = 19;
// name5 = 'Titus Efferian';
// console.log(name5);

// // ES6
// const name6 = 'Harry Ermawan';
// let age6 = 19;
// name6 = 'Harry Hermawan';
// console.log(name6);

// // ES5
// function driveLisence5(passedTest){

// 	if(passedTest){
// 		var firstName = 'Harry';
// 		var yearOfBirth = 1997;

// 		console.log(firstName + ', born in ' +
// 					yearOfBirth + ', is now offically allowed to drive a car.');
// 	}
// }

// driveLisence5(true);

// // ES6

// function driveLisence6(passedTest){

// 	if(passedTest){
// 		let firstName = 'Harry';
// 		const yearOfBirth = 1997;

// 		console.log(firstName + ', born in ' +
// 					yearOfBirth + ', is now offically allowed to drive a car.');
// 	}
// }

// driveLisence6(true);

// ////////////////////////////////////////////////////////
// // Lecture : Blocks and IFFEs

// // ES6

// {
// 	const a = 1;
// 	let b = 2;
// 	var c = 3;
// }

// // console.log(a + b);
// console.log(c);

// // kaya private ga bisa d akses dr luar

// // ES5
// (function(){
// 	var c = 3;
// })();

// console.log(c);

// //////////////////////////////////////////////////////
// // Lecture: Strings

// let firstName = 'John';
// let lastName = 'Smith';
// const yearOfBirth = 1997;

// function calcAge(year){
// 	return 2017 - year;
// }

// // ES5
// console.log('This is ' + firstName + ' ' + 
// 			lastName + '. He was born in ' +
// 			yearOfBirth + '. Today, heis ' +
// 			calcAge(yearOfBirth) + ' years old.');

// // ES6
// console.log(`This is ${firstName}
// 			${lastName}. He was born in 
// 			${yearOfBirth}. Today, he is
// 			${calcAge(yearOfBirth)} years old.`);


// const n = `${firstName} ${lastName}`;
// console.log(n.startsWith('j'));
// console.log(n.endsWith('Sm'));
// console.log(n.include('oh'));
// console.log(`${firstName}
// 	`.repeat(5));

////////////////////////////////////////////
// Lecture : Arrow Functions

// const years = [1990,1965,1982,1937];

// // ES5
// var ages5 = years.map(function(el){
// 	console.log(el);
// 	return 2017 - el;
// });
// console.log(ages5);

// // ES6
// let ages6 = years.map(el => 2017 - el);
// console.log(ages6);

// ages6 = years.map((el,index) => `Age element ${index +1}: ${2017 - el}.`);
// console.log(ages6);

// ages6 = years.map((el,index) =>{
// 	const now = new Date().getFullYear();
// 	const age = now - el;
// 	return `Age element ${index + 1}: ${age}.`;
// });

// console.log(ages6);

////////////////////////////////////////////////////
// Lecture: Arrow function 2

// ES5
// var box5 = {
// 	color: 'green',
// 	position: 1,
// 	clickMe: function(){

// 		var self = this;
// 		document.querySelector('.green').addEventListener('click',function(){
// 			var str = 'This is box number ' + self.position +
// 			' and it is ' + self.color;
// 			alert(str);
// 		});
// 	}
// };

// box5.clickMe();

// // ES6
var box6 = {
	color: 'green',
	position: 1,
	clickMe: function clickMe() {
		var _this = this;

		document.querySelector('.green').addEventListener('click', function () {
			var str = 'This is box number ' + _this.position + ' and it is ' + _this.color;
			alert(str);
		});
	}
};

// box6.clickMe();

// const box66 = {
// 	color: 'green',
// 	position: 1,
// 	clickMe: () => {

// 			document.querySelector('.green').addEventListener('click',
// 				() => {
// 					var str = 'This is box number ' + this.position + ' and it is ' + this.color;
// 					alert(str);
// 				});
// 	}
// };

// box66.clickMe();

// function Person(name){
// 	this.name = name;
// }

// Person.prototype.myFriends5 =
// 	function(friends){

// 		var arr = friends.map(function(el){
// 			 return this.name + ' is friends with ' +el;
// 		}.bind(this));

// 		console.log(arr);
// 	};

// var friends = ['Bob','Jane','Mark'];
// new Person('John').myFriends5(friends);

// // ES6

// Person.prototype.myFriends6 =
// 	function(friends){

// 		var arr = friends.map( (el) => `${this.name} is friends with ${el}`);

// 		console.log(arr);
// 	};

// var friends = ['Bowe','Jaas','Msam'];
// new Person('Harry').myFriends6(friends);

/////////////////////////////////////
// Lecture : Destructuring

// ES5
// var john = ['John',26];
// var name = john[0];
// var age = john[1];

// //ES6
// const [name , age] = ['John',26];
// console.log(name);
// console.log(age);

// const obj = {
// 	firstName: 'John',
// 	lastName: 'Smith'
// };

// const {firstName,lastName} = obj;
// console.log(firstName);
// console.log(lastName);

// const {firstName: a,lastName: b} = obj;
// console.log(a);
// console.log(b);

// function calcAgeRetirement(year){
// 	const age = new Date().getFullYear() - year;
// 	return [age,65-age];
// }

// const [age2,retirement] = calcAgeRetirement(1990);
// console.log(age2);
// console.log(retirement);

///////////////////////////////
// Lecture: Arrays

// const boxes = document.querySelectorAll('.box');

// //ES5
// var boxesArr5 = Array.prototype.slice.call(boxes);
// boxesArr5.forEach(function(cur){
// 	cur.style.backgroundColor = 'dodgerblue';
// });

// //ES6
// const boxesArr6 = Array.from(boxes);
// boxesArr6.forEach(cur => cur.style.backgroundColor = 'green');

//ES5
// for(var i = 0 ; i < boxesArr5.length ; i++){

// 	if(boxesArr5[i].className === 'box green'){
// 		continue;
// 	}

// 	boxesArr5[i].textContent = 'I changed to green!';
// }

//ES6
// for(const cur of boxesArr6){
// 	if(cur.className.includes('green') ){
// 		continue;
// 	}

// 	cur.textContent = 'I changed to green';
// }


// //ES5
// var ages = [12,17,8,21,14,11];

// var full = ages.map(function(cur){
// 	return cur >= 18;
// });

// console.log(full);
// console.log(full.indexOf(true));
// console.log(ages[full.indexOf(true)]);

//ES6
// console.log(ages.findIndex(cur => cur >= 18));
// console.log(ages.find(cur => cur >= 18));

//////////////////////////
//Lecture: Spread Operator

// function addFourAges(a,b,c,d){
// 	return a + b + c + d;
// }

// var sum1 = addFourAges(18,30,12,21);
// console.log(sum1);

// //ES5
// var ages = [18,30,12,21];
// var sum2 = addFourAges.apply(null,ages);
// console.log(sum2);

// //ES6
// const sum3 = addFourAges(...ages);
// console.log(sum3);

// const familySmith = ['John','Jane','Mark'];
// const familyMiller = ['Mary','Bob','Ann'];
// const bigFamily = [...familySmith,...familyMiller];
// console.log(bigFamily);

// const h = document.querySelector('h1');
// const boxes = document.querySelectorAll('.box');
// const all = [h, ...boxes];
// console.log(all);
// // parsing dari nodelist ke array
// Array.from(all).forEach(cur => {cur.style.color = 'purple'; 
// 								cur.style.backgroundColor = 'red';});

//takes an array transform a single values

////////////////////////////////////////////////////////
// Lecture: Rest parameters
/////////////Kebalikan dari Spread Operator

// //ES5
// function isFullAge5(){
// 	//console.log(arguments);
// 	var argsArr = Array.prototype.slice.call(arguments);

// 	argsArr.forEach(function(cur){
// 		console.log((2017-cur) >= 18);
// 	})
// }

// //isFullAge5(1997,2001,1980);
// //isFullAge5(1997,2001,1980,2000,1945);

// //ES6
// function isFullAge6(...years){
// 	//console(years);
// 	years.forEach(cur => console.log((2017-cur) >=18) );
// }
// isFullAge6(1997,2001,1980,2000,1945);

//spread operator di gunain place function call
//rest fuction declareation to exact an arbitrary numbers of paramaters

//ES5
// function isFullAge5(limit){
// 	//console.log(arguments);
// 	var argsArr = Array.prototype.slice.call(arguments,1);

// 	argsArr.forEach(function(cur){
// 		console.log((2017-cur) >= limit);
// 	})
// }

// //isFullAge5(1997,2001,1980);
// isFullAge5(21,2001,1980,2000,1945);

// //ES6
// function isFullAge6(limit,...years){
// 	//console(years);
// 	years.forEach(cur => console.log((2017-cur) >=limit) );
// }
// isFullAge6(21,2001,1980,2000,1945);

//////////////////////////////////
// Lecture: Default Parameters

//ES5

// function SmithPerson(firstName,yearOfBirth,lastName,nationality){

// 	lastName === undefined ? lastName = 'Smith' : lastName =lastName;
// 	nationality === undefined ? nationality = 'Indonesian' : nationality = nationality;

// 	this.firstName = firstName;
// 	this.lastName = lastName;
// 	this.yearOfBirth = yearOfBirth;
// 	this.nationality = nationality;
// }


//ES6

// function SmithPerson(firstName,yearOfBirth,lastName = 'Smith',nationality = 'american'){
// 	this.firstName = firstName;
// 	this.lastName = lastName;
// 	this.yearOfBirth = yearOfBirth;
// 	this.nationality = nationality;
// }

// var harry = new SmithPerson('Harry',1997);
// var mia = new SmithPerson('Mia',1998,'Khalifa','Dutsch');

// //////////////////////////////////////
// // Lecture: Maps

// const question = new Map();
// question.set('question','What\' the capital city of West Java');
// question.set(1, 'Jakarta');
// question.set(2, 'Bandung');
// question.set(3, 'Meikarta');
// question.set(4, 'Surakarta');
// question.set('correct',2);
// question.set(true,'Correct');
// question.set(false,'Try Again');

// console.log(question.get('question'));
// console.log(question.size);

// if(question.has(4)){
// 	//question.delete(4);
// 	//console.log('Answer 4 is here');
// }

// //question.clear();

// // question.forEach((value,key) => console.log(`This is ${key}, and it's set to ${value}`));

// for(let [key,value] of question.entries()){

// 	if(typeof(key) === 'number'){
// 		console.log(`Answer ${key}: ${value}`);

// 	}
// }

// const ans = parseInt(prompt('Write the correct answer'));
// console.log(question.get(ans === question.get('correct') ) ); 

//////////////////////////////////////////////////
// Lecture: Classes

// ES5
// var Person5 = function(name,yearOfBirth,job){
// 	this.name = name;
// 	this.yearOfBirth = yearOfBirth;
// 	this.job = job;
// }

// Person5.prototype.calculateAge = 
// function(){
// 	var age = new Date().getFullYear - this.yearOfBirth;
// 	console.log(age);
// }

// var shem5 = new Person5('Shem',1998,'Student');

// // ES6
// class Person6{
// 	constructor(name,yearOfBirth,job){
// 		this.name = name;
// 		this.yearOfBirth = yearOfBirth;
// 		this.job = job;
// 	}

// 	calculateAge(){
// 			var age = new Date().getFullYear() - this.yearOfBirth;
// 		console.log(age);
// 	}

// 	// static like helper not hoisting
// 	static greeting(){
// 		console.log('Hey hey hey');
// 	}
// }

// const titus = new Person6('Titus',1998,'Gamers');

//////////////////////
///INheretence

// var Person5 = function(name,yearOfBirth,job){
// 	this.name = name;
// 	this.yearOfBirth = yearOfBirth;
// 	this.job = job;
// }

// Person5.prototype.calculateAge = 
// function(){
// 	var age = new Date().getFullYear() - this.yearOfBirth;
// 	console.log(age);
// }

// var Athlete5 = function(name,yearOfBirth,job,olympicGames,medals){
// 	Person5.call(this,name,yearOfBirth,job);
// 	this.olympicGames = olympicGames;
// 	this.medals = medals;
// }

// Athlete5.prototype = Object.create(Person5.prototype);

// Athlete5.prototype.wonMedal = function(){
// 	this.medals++;
// 	console.log(this.medals);
// }


// var johnAthlete5 = new Athlete5('John',1990,'soccer',3,10);

// johnAthlete5.calculateAge();
// johnAthlete5.wonMedal();

// //ES6
// class Person6{
// 	constructor(name,yearOfBirth,job){
// 		this.name = name;
// 		this.yearOfBirth = yearOfBirth;
// 		this.job = job;
// 	}

// 	calculateAge(){
// 		var age = new Date().getFullYear() - this.yearOfBirth;
// 		console.log(age);
// 	}

// }

// class Athlete6 extends Person6{
// 	constructor(name,yearOfBirth,job,olympicGames,medals){
// 		super(name,yearOfBirth,job)
// 		this.olympicGames = olympicGames;
// 		this.medals = medals;
// 	}

// 	wonMedal(){
// 		this.medals++;
// 		console.log(this.medals);
// 	}
// }

// const johnAthlete6 = new Athlete6('Shem',1998,'swimmer',3,10);

// johnAthlete6.wonMedal();
// johnAthlete6.calculateAge();

//////////////////////////////////////////////////////
// CODING CHALLANGE 5
////////////////////////////////////////////////////////

/*
Suppose that you're working in a small town administration,and you're in charge
of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets.
All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report w/ the following:
1. Tree desinty of each park in the town
(formula: number of trees/park area)
2. Average age of each town's park (formula: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets:
   tiny/small/normal/big/huge. If the size is uknown, the default is normal

All the report data should be printed to the console

HINT: Use some of the ES6 features: classes,subclass,template strings,default parameters,
maps,arrow functions,destructuring,etc. 
*/

var Town = function Town(name, buildYear) {
	_classCallCheck(this, Town);

	this.name = name;
	this.buildYear = buildYear;
};

var Parks = function (_Town) {
	_inherits(Parks, _Town);

	function Parks(name, buildYear, trees, area) {
		_classCallCheck(this, Parks);

		var _this2 = _possibleConstructorReturn(this, (Parks.__proto__ || Object.getPrototypeOf(Parks)).call(this, name, buildYear));

		_this2.trees = trees;
		_this2.area = area;
		return _this2;
	}

	_createClass(Parks, [{
		key: 'treeDesinty',
		value: function treeDesinty() {
			var tDesinty = void 0;

			tDesinty = this.trees / this.area;
			console.log(this.name + ' has a tree desinty of ' + tDesinty + ' per square km');
		}
	}, {
		key: 'calculateAge',
		value: function calculateAge() {
			var age = void 0;

			age = new Date().getFullYear() - this.buildYear;

			return age;
		}
	}]);

	return Parks;
}(Town);

var Streets = function (_Town2) {
	_inherits(Streets, _Town2);

	function Streets(name, buildYear, length) {
		var size = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 3;

		_classCallCheck(this, Streets);

		var _this3 = _possibleConstructorReturn(this, (Streets.__proto__ || Object.getPrototypeOf(Streets)).call(this, name, buildYear));

		_this3.length = length;
		_this3.size = size;
		return _this3;
	}

	_createClass(Streets, [{
		key: 'classification',
		value: function classification() {

			var sizeClas = new Map();
			sizeClas.set(1, 'tiny');
			sizeClas.set(2, 'small');
			sizeClas.set(3, 'normal');
			sizeClas.set(4, 'big');
			sizeClas.set(5, 'huge');

			console.log(this.name + ' streets , build in ' + this.buildYear + ', is a ' + sizeClas.get(this.size) + ' street.');
		}
	}]);

	return Streets;
}(Town);

// Parks


var park1 = new Parks("Green Parks", 1945, 2000, 80000);
var park2 = new Parks("Blue Parks", 1810, 200000, 14000);
var park3 = new Parks("Red Parks", 2005, 300, 15000);
var parks = [park1, park2, park3];

// Streets
var street1 = new Streets("Soekarnoe-Hatta", 1946, 15000, 5);
var street2 = new Streets("Jenderal-Sudirman", 1965, 45000);
var street3 = new Streets("Ermawan", 2015, 800, 1);
var streets = [street1, street2, street3];

function park_report(arr) {
	console.log("===== Parks Report =====");
	arr.forEach(function (cur) {
		return cur.treeDesinty();
	});

	var totalAge = 0;

	arr.map(function (el) {
		return totalAge += el.calculateAge();
	});

	console.log('Our ' + arr.length + ' parks have an average of ' + totalAge / arr.length + ' years');

	arr.forEach(function (el) {
		if (el.trees >= 1000) {
			console.log(el.name + ' has more than 1000 trees');
		}
	});
}

function street_report(arr) {
	console.log("===== Streets Report =====");

	var totalLength = 0;

	arr.map(function (el) {
		return totalLength += el.length;
	});

	console.log('Our ' + arr.length + ' streets have a total length of ' + totalLength + ' km, with an average of ' + totalLength / arr.length + ' km.');

	arr.forEach(function (cur) {
		return cur.classification();
	});
}

park_report(parks);
street_report(streets);
