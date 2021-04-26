const { expect } = require('@jest/globals');
const palindrome = require('./src/palindrome');
const verifyPalindrome = palindrome.verifyPalindrome;

test('return true if the string is a palindrome', () => {
    let input = "radar"
    let output = verifyPalindrome(input);
    expect(output).toEqual(true);

});

test("return true if the string isn't a palindrome", () => {
    let input = "margarida"
    let output = verifyPalindrome(input);
    expect(output).toEqual(false);

});

test("returns an error message if the input is not a string", () => {
    let input = 7;
    let output = verifyPalindrome(input);
    expect(output).toEqual("This is not a string!");
});

test("returns an error message if the string is empty", () => {
    let input = "";
    let output = verifyPalindrome(input);
    expect(output).toEqual("This is not a string!");
});
  
test("returns an error message if the string is undefined", () => {
    let input = undefined;
    let output = verifyPalindrome(input);
    expect(output).toEqual("This is not a string!");
});

test("returns an error message if the string is null", () => {
    let input = null;
    let output = verifyPalindrome(input);
    expect(output).toEqual("This is not a string!");
});