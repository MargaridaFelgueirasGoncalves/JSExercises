const { expect } = require('@jest/globals');
const functions = require('./permute');
const replace = functions.replace;
const removeDuplicates = functions.removeDuplicates;
const permuteChars = functions.permuteChars;


test('show all possible permutations', () => {
    let input = "abc"
    let output = permuteChars(input);
    expect(output.length).toEqual(6);
    expect(output).toContain("abc");
    expect(output).toContain("bac");
    expect(output).toContain("bca");
    expect(output).toContain("cab");
    expect(output).toContain("cba");
    expect(output).toContain("acb");
});

test("show all permutations without repetitions", () => {
    let input = "aacb"
    let output = permuteChars(input);
    expect(output.length).toEqual(12);
    expect(output).toContain("aabc");
    expect(output).toContain("aacb");
    expect(output).toContain("abac"); 
    expect(output).toContain("abca"); 
    expect(output).toContain("acab"); 
    expect(output).toContain("acba"); 
    expect(output).toContain("baac"); 
    expect(output).toContain("baca"); 
    expect(output).toContain("bcaa"); 
    expect(output).toContain("caab"); 
    expect(output).toContain("caba"); 
    expect(output).toContain("cbaa");
});

test("returns only one character when a one-character string is passed", () => {
    let input = "c";
    let output = permuteChars(input);
    expect(output).toEqual("c");
});

test("returns an error message if the string is empty", () => {
    let input = "";
    let output = permuteChars(input);
    expect(output).toEqual("This is not a string!");
});
  
test("returns an error message if the string is undefined", () => {
    let input = undefined;
    let output = permuteChars(input);
    expect(output).toEqual("This is not a string!");
});

test("returns an error message if the string is null", () => {
    let input = null;
    let output = permuteChars(input);
    expect(output).toEqual("This is not a string!");
});
  
test("returns an error message if the input is not a string", () => {
    let input = 7;
    let output = permuteChars(input);
    expect(output).toEqual("This is not a string!");
});

test('remove duplicated elements', () => {
    expect(removeDuplicates(['abc', 'dcb', 'abc', 'hgo'])).toStrictEqual(['abc', 'dcb', 'hgo']);
    expect(removeDuplicates(['abc', 'dcb', 'abc', 'dcb', 'hgo'])).toStrictEqual(['abc', 'dcb', 'hgo']);
    expect(removeDuplicates([])).toStrictEqual([]);
});

test('should remove a char from a given string', () => {
    expect(replace(1, 'Olá')).toEqual('Oá');
    expect(replace(1, '')).toEqual('');
});