// 1.Write a JavaScript function to check if a given number is even or odd.

function isEvenOrOdd(number) {
   if (number % 2 === 0) {
    return 'Given number is Even'
   } else {
    return 'Given number is Odd' 
   }
}

console.log(isEvenOrOdd(2));
console.log(isEvenOrOdd(3));

// 2.Write a JavaScript program to calculate the factorial of a number.

function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n-1);
    }
}

console.log(factorial(5));

// 4.Write a JavaScript program to check if a given number, is a perfect square.

function isPerfectSquare(number) {
    const squareRoot = Math.sqrt(number);
    
    return squareRoot === Math.floor(squareRoot);
}

console.log(isPerfectSquare(30));
console.log(isPerfectSquare(4096));

// 5. Write a JavaScript function that accepts a string as a parameter and counts the
// number of vowels within the string

function countVowels(str) {
    str = str.toLowerCase();

    let vowelCount = 0;
    const vowels = 'aeiou';

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            vowelCount++;
        }
    }
    return vowelCount;
}

const inputString = 'full stack devoleper';
const result = countVowels(inputString);

console.log(`Total number of vowels is ${result}`);


// 7. Write a JavaScript function to print an integer with thousands separated by
// commas

function thousandsSeperators(number) {
    return number.toLocaleString();
}

console.log(thousandsSeperators(2500));
console.log(thousandsSeperators(38000));
console.log(thousandsSeperators(5850002));

// 9. Write a JavaScript program to check if two given integers have opposite signs

function checkOppositeSigns(num1 , num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'parameters value must be numbers!';
    }
    if ((num1 >= 0 && num2 < 0) || (num1 < 0 && num2 >= 0)) {
        return 'signs are opposite';
    } else {
        return 'signs are not opposite';
    }
}

console.log(checkOppositeSigns(200,-300));
console.log(checkOppositeSigns(200,500));
console.log(checkOppositeSigns('100',200));

// 10. In an array every element appears twice except for one. Write a JavaScript
// program to find the non-repeated element in an array using bit manipulation

function findNonRepeatedElement(arr) {
    let result = 0;

    for (let i = 0; i < arr.length; i++) {
        result ^= arr[i];
    }
    return result;
}

console.log(findNonRepeatedElement([1]));
console.log(findNonRepeatedElement([1,2,3]));
console.log(findNonRepeatedElement([1, 2, 8, 3, 1, 2, 3, 8, 6, 6, 7]));


