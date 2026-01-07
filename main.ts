/**
 * @author Brayden Thistle
 * @version 1.0.0
 * @date 2026-01-07
 * @fileoverview this program 
 */

let sentence: string = ""
let guess1: string;
let answer2: string = "" 

sentence = String(prompt("Please enter a sentence:"));
guess1 = String(prompt("Please enter a word to search for in your sentence:"));

answer2 = sentence

if (answer2 === guess1) {
  console.log(`Yay, you guessed the right answer.`);
} else {
  console.log("Incorrect, try again.");
}

