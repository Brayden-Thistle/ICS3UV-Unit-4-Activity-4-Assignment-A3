/**
 * @author Brayden Thistle
 * @version 1.0.0
 * @date 2026-01-07
 * @fileoverview this program will prompt the user for a sentence and then ask for a word insie the sentence. if its found then you will be told. if it isnt found you will also be told.
 */

//variables
let sentence: string = ""
let guess1: string
//array
let answer2: string[];

//prompts
sentence = String(prompt("Please enter a sentence:"));
guess1 = String(prompt("Please enter a word to search for in your sentence:"));

//redeclaring answer2
answer2 = sentence.split(" ");

//if else statement
if (answer2.includes(guess1)) {
  console.log(`Yay, you guessed the right answer.`);
} else {
  console.log("Incorrect, try again.");
}

console.log("\nDone.");
