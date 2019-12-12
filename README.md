# CHALLENGE2_WEEK2


#### Arrays, Strings and loops

Count vowels in a string, every letter in the english alphabet is either a vowel or consonant, [a, e, i, o, u] is a list of all vowels. The rest are all considered consonants. 

Write a function that takes a string and returns an array of length 2 containing a new string made of all and only the vowels from the original string and the number of duplicates in the original string. Only the first instance of the vowel is considered.

```
For example:
countVowels(‘dahdah’)  # will return [‘a’, 3]
countVowels(‘drink water’) # will return [‘iae’, 1]
```

#### Arrays, conditional logic
Write a function named fizzBuzz that takes two(2) arrays  and returns Fizz if the combined length of the lists is divisible by 3,  Buzz if it is divisible by 5, Fizzbuzz if it is divisible by both 5 and 3  or the combined length of the list.

```
For example:
fizzbuzz([1, 2, 3], [ ])    # will return “fizz”
fizzbuzz([1, 2, 3], [1, 2])  # will return “buzz”  
fizzbuzz([1, 2, 3], [1]) # will return 4
```

Copy the fizzbuzz folder to your solution repository, in there, there is a fizzbuzz.js and fizzbuzz.test.js. fizzbuzz.test.js contains minimal tests for this challenge and fizzbuzz.js contains an unimplemented `fizzBuzz` function. Implement the function to pass all the tests. The goal is to write clean readable code that implements fizzBuzz and passes all the tests. Feel free to add more tests.

##### How to run the tests
Navigate to fizzbuzz folder in the terminal(command prompt) and run the following commands
1. `yarn install`
2. `yarn test`



