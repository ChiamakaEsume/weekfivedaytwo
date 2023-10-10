function NonNumericElements(array) {
  const numericElements = [];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number" && !isNaN(array[i])) {
      numericElements.push(array[i]);
    }
  }
  return numericElements;
}

const score = [1, 29, 20, 50, "bag", "tall"];
const filteredScore = NonNumericElements(score);

console.log(filteredScore);
