# Short Responses

For this assessment, aim to write a response with the following qualities:

- [ ] Addresses all parts of the prompt
- [ ] Accurately uses relevant technical terminology
- [ ] Is free of grammar and spelling mistakes
- [ ] Is easy to comprehend

For each prompt below, write your response in the space provided. Aim to answer each prompt in 2-5 concise sentences. Make sure to preview your markdown to check how it is rendered before submitting.

## Prompt 1

Consider the code below which has a bug. Instead of printing the correct letter grade, it always prints `"Your grade is: undefined"`.

```js
const getLetterGrade = (score) => {
  let letter;
  if (score >= 90) {
    let letter = "A";
  } else if (score >= 80) {
    let letter = "B";
  } else if (score >= 70) {
    let letter = "C";
  } else {
    let letter = "F";
  }

  return "Your grade is: " + letter;
};

console.log(getLetterGrade(95)); // This should print "Your grade is: A"
console.log(getLetterGrade(82)); // This should print "Your grade is: B"
console.log(getLetterGrade(74)); // This should print "Your grade is: C"
console.log(getLetterGrade(65)); // This should print "Your grade is: F"
```

**Part A**: Explain why this bug is occurring. Use proper technical terminology.

**Part B**: Then, explain how you would fix it.

### Response 1

**Part A:**

The function `getLetterGrade` when called, prints `"Your grade is: undefined"`, because the letter **variable** is declared multiple times within the if statement. This means the **block scope** of the if statement prevents a value from being added to the `letter` variable created at the beginning of the `getLetterGrade` function, and by default a return value is undefined.

**Part B:**

To fix this code, I would simply remove the let declarations inside each if statement, which would be lines 20, 22, 24, and 26. This allows the variable `letter `declared outside the if statement to be updated.

---

## Prompt 2

Read the following code:

```js
const originalSettings = { volume: 50, brightness: 80 };
const newSettings = originalSettings;
newSettings.volume = 75;
console.log(originalSettings.volume);
```

**Part A:** What will be logged to the console? Why does this happen? Be sure to use precise technical terminology in your answer.

**Part B:** How would you modify the code so that changing `newSettings.volume` does NOT affect `originalSettings.volume`? Write the corrected code below your explanation.

### Response 2

**Part A:**

When logging, `originalSettings` will print the number 75. This is because when you create a copy of an object, both the copy _and_ the original will reference the same value. This means that any modification to the object copy will result in modification to the original.

**Part B:**

In order to have any modifications done to `newSettings.volume` not affect `originalSettings.volume`, the best course of action would be to create a **true copy**. This is done by creating a copy with of an object with the **spread operator**.

**Corrected Code:**

```js
const originalSettings = { volume: 50, brightness: 80 };
const newSettings = { ...originalSettings }; // spread operator creates a true copy
newSettings.volume = 75;
console.log(originalSettings.volume);
```

---

## Prompt 3

Given this array of products and the code using `filter`:

```js
const products = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Phone", price: 700, inStock: false },
  { name: "Watch", price: 300, inStock: true },
  { name: "Tablet", price: 500, inStock: true },
];

const itemsInStock = products.filter((product) => {
  return product.inStock;
});
```

Walk through what happens in the first iteration of filter:

- What is the value of `product`?
- What gets returned from the callback?
- What happens with that returned value?

### Response 3

During the first iteration of `products.filter`, the value of `product` is the first element in the array. The **value** of the **key** for `person.inStock` is returned, which is either `true` or `false`. This returned value is used a _condition_ to check which elements in the array are **filtered** to the new array created. In the code above, the end result is that array elements 0, 2, and 3, get returned in the new array created, since each of these elements value of the key `inStock` is true.
