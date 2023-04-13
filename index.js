/* We use ${} to concatenate variables*/
var hacker ="Yabel";
var hacker1 = "The driver's name is";
console.log(`${hacker1}`, `${hacker}`);
var hacker3 = "The navigator's name is";
var hacker4 = "Tonitheboss";
console.log(`${hacker3}`, `${hacker4}`);

//Depending on which name is longer, print:
// Iteration 2: Conditionals

console.log(`${hacker} ${hacker.length}`);
console.log(`${hacker4} ${hacker4.length}`);

const hackerlength= 5;
const hacker4length=11;

if (hackerlength >=11) {
  console.log("The driver has the longest name, it has 5 characters");
}
else
  console.log("It seems that the navigator (Tonitheboss) has the longest name, it has 11 characters");

// Iteration 3: Loops

var hacker ="Yabel";
var hacker4 = "Tonitheboss";
var result = hacker.toUpperCase().split("").join(" ");
console.log(result);
var result = hacker4.toUpperCase().split("").join(" ");
console.log(result);

let string = "Tonitheboss"
string = [...string].reverse().join("");

console.log(string);

if (hacker.length<hacker4.length)
console.log(`The driver's name goes first`);
/*
.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".

3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".

3.3 Depending on the lexicographic order of the strings, print:

The driver's name goes first.
Yo, the navigator goes first, definitely.
What?! You both have the same name?
*/
 