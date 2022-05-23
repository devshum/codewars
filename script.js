// Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10. This may be True and False in your language, e.g. PHP.

// Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function. 

function narcissistic(value) {
  const allNumbers = `${value}`.split('')
  const convertedNumbers = []

  const digits = allNumbers.length

  allNumbers.forEach(number => 
  convertedNumbers.push(number ** digits))
  
  const result = convertedNumbers
  .reduce((curValue, nextValue) => curValue + nextValue)
  
  return result === value
}

// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

function findOutlier(integers){
  const res = []
   integers.forEach(integer => {
     if(integer % 2 === 0) {
       res.push(integer)
     }
   })
   
  if(res.length === 1) {
    return res[0]
  }
  
  if(res.length > 1) {
    return integers.find(integer => {
      if(integer % 2 !== 0) {
       return integer
     }
    })
  }
}

// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

function duplicateCount(text){
  const letters = text.toLowerCase().split('')
  const allDublicates = letters.filter((letter, i) => 
                                       letters.indexOf(letter) !== i)

  const uniqLetters = new Set([...allDublicates])

  return [...uniqLetters].length
}
