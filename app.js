/*
1. Write a program that takes input a name from user & greet the
user :
*/
// var name = prompt("Enter your name:");
// alert("Hi, " + name);



/*
2. Write a program to take input a number from user & display
it’s multiplication table on your browser. If user does not enter
a new number, multiplication table of 5 should be displayed by
default.
*/
// var table = prompt("Enter num: ",5);
// document.write(table + " * " + "1" + " = " + table*1);
// document.write("<br>" + table + " * " + "2" + " = " + table*2);
// document.write("<br>" + table + " * " + "3" + " = " + table*3);
// document.write("<br>" + table + " * " + "4" + " = " + table*4);
// document.write("<br>" + table + " * " + "5" + " = " + table*5);
// document.write("<br>" + table + " * " + "6" + " = " + table*6);
// document.write("<br>" + table + " * " + "7" + " = " + table*7);
// document.write("<br>" + table + " * " + "8" + " = " + table*8);
// document.write("<br>" + table + " * " + "9" + " = " + table*9);
// document.write("<br>" + table + " * " + "10" + " = " + table*10);



/*
3. Write a program to take “city” name as input from user. If user
enters “Karachi”, welcome the user like this: “Welcome to city
of lights”
*/
// var city = prompt("Enter ur city : ");
// var a = 'Karachi';
// var b = 'karachi'; 
// if ( city === a || city === b )
// {
//     alert("Welcome to the city of lights.");
// }



/*
4. Write a program to take “gender” as input from user. If the
user is male, give the message: Good Morning Sir. If the user is
female, give the message: Good Morning Ma’am.
*/
// var gender = prompt("Gender: ");
// var m = "male"
// var M = "Male"
// if ( gender === m || gender === M )
// {
//     alert("Good Morning Sir");
// } else if ( gender === 'female' || gender === 'Female' )
// {
//     alert("Good Morning Ma'am");
// }



/*
5. Write a program to take input color of road traffic signal from
the user & show the message :
*/
// var color = prompt("Enter signal color:");
// if ( color === "red" || color === "Red" )
// {
//     alert("Vehicles must stop");
// } else if ( color === "yellow" || color === "Yellow" )
// {
//     alert("Vehicles should get ready to move");
// } else if ( color === "green" || color === "Green" )
// {
//     alert("Vehicles can move now");
// }



/*
6. Write a program to take input max age & current age from
user. If the current age is less than or equal to max age,
show the message “You are welcome”
*/
// var currentAge = prompt("Enter ur current age : ");
// var maxAge = 26;
// if ( currentAge <= maxAge ){
//     alert("You are welcome");
// } else {
//     alert("Sorry ! you are not eligible to access.")
// }



/*
7. Write a program to take input remaining fuel in car (in litres)
from user. If the current fuel is less than 0.25litres, show the
message “Please refill the fuel in your car”
*/
// var fuel = prompt("Enter your remaining fuel in litres: ");
// var minFuel = 0.25;
// if ( fuel <= minFuel ){
//     alert("Please refill the fuel in your car.");
// } else {
//     alert("You have enough fuel in your car.");
// }



/*
8. Run this script, & check whether alert message would be
displayed or not. Record the outputs.
*/
//A
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

//B
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

//C
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

//D
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

//E
// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }

//F
// if("car" < "cat"){
// alert("car is smaller than cat");
// }



/*
9. Write a program to take input the marks obtained in three
subjects & total marks. Compute & show the resulting
percentage on your page.
Show the total marks, marks obtained, percentage, grade &
remarks:
*/
// var totalMarks1 = +prompt("Enter your total marks of 1st subject");
// var totalMarks2 = +prompt("Enter your total marks of 2nd subject");
// var totalMarks3 = +prompt("Enter your total marks of 3rd subject");
// var totalMarks = totalMarks1 + totalMarks2 + totalMarks3 ;
// document.write("<h1>Mark Sheet : </h1>");
// document.write("Total Marks : " + totalMarks);
// var obtainMarks1 = +prompt("Enter your obtained marks of 1st subject");
// var obtainMarks2 = +prompt("Enter your obtained marks of 2nd subject");
// var obtainMarks3 = +prompt("Enter your obtained marks of 3rd subject");
// var totalMarksObtained = obtainMarks1 + obtainMarks2 + obtainMarks3;
// document.write("<br>Total Obtain Marks : " + totalMarksObtained );
// var percnt = ( totalMarksObtained / totalMarks ) * 100;
// document.write("<br>Your percentage is : " + percnt);
// if ( percnt >= 80 ){
//     document.write("<br>Grade : A-One");
//     document.write("<br>Remarks : Excellent");
// } else if ( percnt >= 70 ){
//     document.write("<br>Grade : A");
//     document.write("<br>Remarks : Good");
// } else if ( percnt >= 60 ){
//     document.write("<br>Grade : B");
//     document.write("<br>Remarks : You to improve");
// } else if ( percnt < 60 ){
//     document.write("<br>Grade : Fail");
//     document.write("<br>Remarks : Sorry");
// }



/*
10. Write a program to implement checkout process of a
shopping cart system for an e-commerce website. Take input
from users, the following:
a. Name of item1
b. Name of item2
c. Price of item 1
d. Price of item 2
e. Ordered quantity of item 1
f. Ordered Quantity of item 2
g. Shipping charges
Compute the total cost. If the total cost is above 2000 PKR ,
offer them 10% discount & show the receipt in your browser.
*/
// document.write("<h1>Shopping Cart:</h1>");
// var item1 = prompt("Name of item 1: ");
// var item2 = prompt("Name of item 2: ");
// var priceItem1 = +prompt("Price of item 1: ");
// var priceItem2 = +prompt("Price of item 2: ");
// var quantityItem1 = +prompt("Quantity of item 1: ");
// var quantityItem2 = +prompt("Quantity of item 2: ");
// var shipcharges = +prompt("Shipping charges: ");
// var totalCost = ( priceItem1 * quantityItem1) + ( priceItem2 * quantityItem2 ) + shipcharges;
// var discount = ( 10 * totalCost ) / 100;
// document.write("<br>Price of single " + item1 + " is <mark>" + priceItem1 + " PKR </mark>");
// document.write("<br>Quantity of " + item1 + " is <b>" + quantityItem1 + "</b>" );
// document.write("<br>Price of single " + item2 + " is <mark>" + priceItem2 + " PKR </mark>");
// document.write("<br>Quantity of " + item2 + " is <b>" + quantityItem2 + "</b>" );
// document.write("<br><br>Shipping charges is <mark>" + shipcharges + " PKR </mark>");
// document.write("<br><br>Total cost of your order is <mark>" + totalCost + " PKR </mark>");
// if( totalCost > 2000 ){
// var discountPrice = totalCost - discount;
// document.write("<br>Discounted price is <mark>" + discountPrice + " PKR </mark>");
// }


/*
11. Guess game:
Store a secret number (ranging from 1 to 10) in a variable.
Prompt user to guess the secret number.
a. If user guesses the same number, show “Bingo! Correct
answer”.
b. If the guessed number +1 is the secret number, show
“Close enough to the correct answer”.
*/
// var secretNo = 5 ;
// var searchNo = +prompt("Guess the secret no.(Ranging 1 to 10) : ");
// if ( searchNo === 4){
//     alert("Close enough to the correct answer");
// } else if ( searchNo === 6 ){
//     alert("Close enough to the correct answer");
// } else if ( searchNo === 5 ){
//     alert("Bingo ! correct answer ");
// } else {
//     alert("Sorry, try again.");
// }



/*
12. Write a program to check whether the given number is
divisible by 3. Show the message to the user if the number is
divisible by 3.
*/
// var num = prompt("Enter no you want to check: ");
// var result = num % 3;
// if ( result === 0){
//     alert("Num is divisible by 3");
// } else {
//     alert("Num is not divisible by 3")
// }



/*
13. Names & Total scores of two teams are taken as input. Write
a program that shows which team has won the game or show if
there is a tie. (Team A or Team B)
*/
// var team1 = prompt("Name of first team: ");
// var team2 = prompt("Name of second team: ");
// var scoreTeam1 = +prompt("Score of first team: ");
// var scoreTeam2 = +prompt("Score of second team: ");
// if ( scoreTeam1 > scoreTeam2 ){
//     alert("Team " + team1 + " have won th game.")
// } else if ( scoreTeam1 < scoreTeam2 ){
//     alert("Team " + team2 + " have won th game.")
// } else if ( scoreTeam1 === scoreTeam2 ){
//     alert("Game is tie");
// }



/*
14. Take a string, a number and a Boolean in three variables.
Write a program that checks the type of variables & responds
accordingly.
*/
// var a = "Karachi";
// var b = 0323;
// var c = true;
// alert("Karachi is " + typeof a);
// alert("0323 is " + typeof b);
// alert("true is " + typeof c);



/*
15. Write a program that checks whether the given input is an
even number or an odd number.
*/
// var input = prompt("Enter no. : ")
// var check = input % 2;
// if ( check === 0 ){
//     alert("The no. you have entered is even");
// } else {
//     alert("The no. you have entered is odd");
// }



/*
16. Weather in Karachi nowadays is too cool, write a program
that takes temperature as input and shows a message based on
following criteria
a. T > 40 then “It is too hot outside.”
b. T > 30 then “The Weather today is Normal.”
c. T > 20 then “Today’s Weather is cool.”
d. T > 10 then “OMG! Today’s weather is so Cool.”
*/
// var temp = prompt("Enter temperature in degree centigrade : ");
// if ( temp >= 40 ){
//     alert("It is too hot outside.");
// } else if ( temp >= 30 ){
//     alert("The weather today is normal.");
// } else if ( temp >= 20 ){
//     alert("Today's weather is cool.");
// } else if ( temp >= 10 || temp < 10 ){
//     alert("OMG !Today's weather is so cool.");
// }



/*
17. Write a program to create a calculator for +,-,*, / & % using if
statements. Take the following input:
a. First number
b. Second number
c. Operation (+, -, *, /, %)
Compute & show the calculated result to user.
*/
// var a  = +prompt("Enter 1st number : ");
// var b  = +prompt("Enter 2nd number : ");
// var operation = prompt("Enter which operation you want to perform (+ , - / * %): ");
// if ( operation === '+' ){
//     var c = a + b;
//     alert( a + " + " + b + " is " + c )
// } else if ( operation === '-' ){
//     var c = a - b;
//     alert( a + " - " + b + " is " + c )
// } else if ( operation === '/' ){
//     var c = a / b;
//     alert( a + " / " + b + " is " + c )
// } else if ( operation === '*' ){
//     var c = a * b;
//     alert( a + " * " + b + " is " + c )
// } else if ( operation === '%' ){
//     var c = a % b;
//     alert( a + " % " + b + " is " + c )
// }



/*
18. Write a program that takes user input day name. If the day is
Monday, Tuesday, Wednesday, Thursday or Friday, then show
“It’s a week day”. If the day is Saturday then show “It’s
weekend”. If the day is Sunday then show “Yay! It’s a holiday”.
*/
// var day = prompt("Enter day: ")
// if ( day === 'monday' || day === 'tuesday' || day === 'wednesday' || day === 'thursday' || day === 'friday' || day === 'Monday' || day === 'Tuesday' || day === 'Wednesday' || day === 'Thursday' || day === 'Friday' )
// {
//     alert("It's a week day.")
// } else if ( day === "saturday" || day === "Saturday" )
// {
//     alert("It's a week end");
// } else if ( day === "sunday" || day === "Sunday" )
// {
//     alert("Yay ! It's a holiday.");
// } else {
//     alert("Error, you entered invalid description")
// }



/*
19. Write a program that takes input user’s score, if it’s greater
than 50, say “You are passed”. Otherwise, show “Try again!”
*/
// var score = prompt("Enter your score: ");
// if ( score > 50 ){
//     document.write("You are passed");
// } else {
//     document.write("Try again !");
// }



/*
20. Write a program that:
a. takes 2 numbers.
b. tells whichever number is the greater (higher) number.
c. tells if they are equal
Show the output to make sure it works (e.g. "The greater
number of 5 and 10 is 10.").
*/
// var a = +prompt("Enter 1st no. : ");
// var b = +prompt("Enter 2nd no. : ");
// if ( a > b )
// {
//     document.write("The greater no. of " + a + " and " + b + " is " + a);
// } 
// else if ( a < b )
// {
//     document.write("The greater no. of " + a + " and " + b + " is " + b);
// } 
// else if ( a === b )
// {
//     document.write("Number" + a + " and " + b + " are equal.");
// }



/*
21. The Translator:
Write a program that:
a. takes 1 input, a language code (e.g. "es", "de", "en")
b. tells "Hello, World" for the given language, for atleast 3
languages. It should default to returning English.
(Hint: use translate.google.com to check the translation of
hello world in different languages)
*/
// var lang = prompt("Enter language code (es , de ,en): ");
// if ( lang === 'es'){
//     alert("Hola Mundo");
// } else if ( lang === 'de'){
//     alert("Hallo Welt");
// } else if ( lang === 'en'){
//     alert("Hello World");
// }



/*
22. Write a program to take input a number & tell whether it’s a
positive or negative number. 
*/
// var num = +prompt("Enter a number: ");
// if ( num < 0 ) {
//         console.log("Its a negative number.")
// } else if (num >= 0 ) {
//         console.log("Its a positive number.")
// }



/*
23. The Pluralizer: Write a program that:
a. takes 2 inputs, a noun and a number.
b. tells the number and pluralized form, like "5 cats" or "1
dog".
// */
// var num = +prompt("Enter a number: ");
// var noun = prompt("Enter a noun: ");
// if ( num > 1){
//     document.write(num + " " + noun + "s");
// } else {
//     document.write(num + " " + noun);
// } 
