const RomanNumerals = require('./RomanNumerals');

test('convert decimal to roman', () => {
  expect(RomanNumerals.toRoman(1000)).toBe('M');
});

test('convert roman to decimal', () => {
    expect(RomanNumerals.fromRoman('M')).toBe(1000);
});