function getNonEmptyInput(Hello) {
  let userInput = prompt(Hello);
  while (userInput === null || userInput.trim() === "") {
    userInput = prompt("Input cannot be empty. " + promptMessage);
  }

  return userInput;
}

const input = getNonEmptyInput("Please enter something:");
console.log("User input:", input);
