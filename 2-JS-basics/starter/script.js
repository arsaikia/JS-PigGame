// /****************************************
// Coding Challange 1
// *****************************************/

// var massMark, massJohn, heightMark, heightJohn;

// massMark = 80;
// massJohn = 70;
// heightMark = 1.81;
// heightJohn = 1.76;

// var bmiMark = massMark / (heightMark*heightMark);
// var bmiJohn = massJohn / (heightJohn*heightJohn);

// var isBmiGreater = bmiMark > bmiJohn;

// console.log("Is Mark's BMI greater than John ? " + isBmiGreater );

// /****************************************
// * Truthy and FALSY Values
// *
// * FALSY valus   : UNDEFINED, NULL, 0, NAN
// * TRUTHY values : Everythin else
// *****************************************/

// var height;

// height = 0;

// if( height || height === 0){
//     console.log("Variable is defined!");
// }
// else{
//     console.log("Variable is NOT defined!");
// }

/****************************************
 * Function decleration and expression
 *****************************************/

// // Decleration
// function whatDoYouDo( job, firstName ){

// };

// // Expression
// var whatDoYouDo = function(job, firstName){

// };

// /****************************************
// * Arrays
// *****************************************/

// var names = ['John', 'Mark', 'Jane'];
// var years = new Array('1990', '1971', '1988');

// console.log(names[1]);
// console.log(years.length);

// // Mutate Arrays
// names[1] = 'Ben';
// names[names.length] = 'jane';
// console.log(names);

// // Different Data types
// var multDataType = ['Jane', 1990];
// console.log(multDataType);

// multDataType.push('Teacher');
// console.log(multDataType);

// multDataType.unshift('Mr');
// console.log(multDataType);

// multDataType.pop();
// multDataType.shift();
// console.log(multDataType);

// console.log(multDataType.indexOf(1990));

// /****************************************
// * Challenge 3
// *****************************************/

// var billAmount = [124, 68, 256];
// var tipAmount = [], totalAmount = [];

// function calculateTip( billAmount ){

//     billAmount.forEach(function(item){
//         switch (item) {
//             case (0 < item < 100):
//                 tipAmount.push(0.20*item);
//                 totalAmount.push(item+(0.20*item));
//                 break;

//             case (100 < item < 200):
//                 tipAmount.push(0.10*item);
//                 totalAmount.push(item+(0.10*item));
//                 break;

//             default:
//                 tipAmount.push(0.05*item);
//                 totalAmount.push(item+(0.05*item));
//                 break;
//         }
//     });

// };

// calculateTip( billAmount );
// console.log( billAmount, tipAmount, totalAmount );

// /****************************************
// * Objects and Properties
// *****************************************/

// var john = {
// 	firstName     : 'John', // firstName is the *property* of john *object*
// 	lastName      : 'Smith',
// 	birthYear     : 1991,
// 	familyMembers : [ 'Emily', 'sam' ],
// 	isMarried     : false,
// 	calcAge       : function () {
// 		this.age = 2020 - this.birthYear;
// 	}
// };

// console.log(john.firstName);
// console.log(john['isMarried']);
// john.calcAge();
// console.log(john);

// /*****************************
// * CODING CHALLENGE 4
// */

// /*
// Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
// 1. For each of them, create an object with properties for their full name, mass, and height
// 2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
// 3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

// Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

// GOOD LUCK 😀
// */

// var john = {
// 	fullName : 'John Smith',
// 	mass     : 110,
// 	height   : 1.95,
// 	calcBMI  : function () {
// 		this.bmi = this.mass / (this.height * this.height);
// 		return this.bmi;
// 	}
// };

// var mark = {
// 	fullName : 'Mark Miller',
// 	mass     : 78,
// 	height   : 1.69,
// 	calcBMI  : function () {
// 		this.bmi = this.mass / (this.height * this.height);
// 		return this.bmi;
// 	}
// };

// if (john.calcBMI() > mark.calcBMI()) {
// 	console.log(john.fullName + ' has a higher BMI of ' + john.bmi);
// }
// else if (mark.bmi > john.bmi) {
// 	console.log(mark.fullName + ' has a higher BMI of ' + mark.bmi);
// }
// else {
// 	console.log('They have the same BMI');
// }

/*****************************
* CODING CHALLENGE 5
*/

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, 
and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). 
HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, 
and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, 
and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, 
divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/

var tipJohn = {
	billJohn  : [ 124, 48, 268, 180, 42 ],
	tipJohn   : [],
	johnTotal : [],

	calcTip   : function () {
		for (var i = 0; i < this.billJohn.length; i++) {
			if (0 < this.billJohn[i] < 50) {
				this.tipJohn[i] = 0.2 * this.billJohn[i];
				this.johnTotal[i] = this.tipJohn[i] + this.billJohn[i];
			}
			else if (49 < this.billJohn[i] <= 200) {
				this.tipJohn[i] = 0.15 * this.billJohn[i];
				this.johnTotal[i] = this.tipJohn[i] + this.billJohn[i];
			}
			else if (200 < this.billJohn[i]) {
				this.tipJohn[i] = 0.5 * this.billJohn[i];
				this.johnTotal[i] = this.tipJohn[i] + this.billJohn[i];
			}
		}
	}
};

tipJohn.calcTip();
console.log(tipJohn);




