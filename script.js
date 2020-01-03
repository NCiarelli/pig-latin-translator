// PIG LATIN TRANSLATOR FUNCTIONS
// To Add: Checking for more than whitespaces

function translate(inputString) {
  let result = "";

  const seperator = /\s+/;
  // Split string by spaces between words after trimming any spaces on the ends.
  // Treats multiple spaces as one separator
  // NOT CURRENTLY WORKING CORRECTLY, TODO: needs to handle trailing spaces, and different types of spaces
  let strArray = inputString.split(seperator);
  // console.log(strArray);
  // Runs through each split word and adds a space and the translated word to the result string
  for (let i = 0; i < strArray.length; i++) {
    // Check that this isn't the first word which doesn't need a space
    if (i > 0) {
      result += " ";
    }
    result += getPigLatin(strArray[i]);

  }
  return result;
}




function getPigLatin(word) {
  let unModTempString = word;
  // Create a string with all lowercase of the input to avoid problems with capitalization
  let tempString = unModTempString.toLowerCase();
  let results;
  // let beginningChar;
  // let endingChar;

  // Check if the input string has a number (uses regex)
  if (/\d/.test(word)) {
    // return the original word if so
    return word;
  }
  // // If the first character is not a letter
  // if (!isLetter(unModTempString.charAt(0))) {
  //   // Remove it from the string and store it to add back on at the end.
  //   beginningChar = unModTempString.shift();
  // }
  // // If the last character is not a letter
  // if (!isLetter(unModTempString.charAt(unModTempString.length - 1))) {
  //   // Remove it from the string and store it to add back on at the end.
  //   endingChar = unModTempString.pop();
  // }

  // After puncuation check, turn the string to all lower case


  // If the first letter is a vowel...
  const firstChar = tempString.charAt(0);
  if (ifVowel(firstChar)) {
    // Just add way onto the end
    results = word + "way";
  } else {
    // Otherwise...

    // check each next letter until you get a vowel
    for (let i = 1; i < tempString.length; i++) {
      if (ifVowel(tempString.charAt(i))) {
        // Once you find it, take all the consonants from the beginning for the end
        const endPart = word.slice(0, i);
        // And put the rest in front
        const beginPart = word.slice(i, word.length);
        // Then add "ay"
        results = beginPart + endPart + "ay";
        break;
      }
    }

    // Check for the case that only y is a vowel in a word
    if (results === undefined) {
      results = word + "ay";
    }
  }
  return results;
}

// Function to check if a string is a letter or not
function isLetter(str) {
  return str.length === 1 && str.match(/[a-z]/i);
}

function ifVowel(x) {
  //   Check if the  letter is a vowel
  let check;
  switch (x) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      // If so, return true
      check = true;
      break;
    default:
      // Otherwise, return false
      check = false;
  }

  return check;
}

//     // Otherwise, check the first letters of the word until you find a vowel
//     for (let i = 0; i < word.length; i++) {
//       switch (word.charAt(0)) {
//         case "a":
//         case "e":
//         case "i":
//         case "o":
//         case "u":
//           // let temp = results.splice(0,i-1);
//           // Take the end of the word starting with the first vowel(indicated by i), and tack the
//             results = word.slice(i, result.length-1) + word.slice(0, i-1)
//         default:
//       }
//     }


// CODE FOR SETUP TO RUN
if (typeof module !== "undefined") {
  // RUN FOR TESTING
  module.exports = { translate };
} else {
  // RUN FOR BROWSER
  document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault();
    let formData = new FormData(e.target);
    let word = formData.get("word");
    let translation = translate(word);
    document.querySelector("#translation").innerText = translation;
  });
}
