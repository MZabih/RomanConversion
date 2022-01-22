function toRoman(num: number) {
  //create key:value pairs
  var romanLookup: Record<string, number> = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 };
  var roman = [];
  var romanKeys = Object.keys(romanLookup);
  var curValue;
  var index;
  var count = 1;

  for (var numeral in romanLookup) {
    curValue = romanLookup[numeral];
    index = romanKeys.indexOf(numeral);

    while (num >= curValue) {

      if (count < 4) {
        //push up to 3 of the same numeral
        roman.push(numeral);
      } else {
        //else we had to push four, so we need to convert the numerals 
        //to the next highest denomination "coloring-up in poker speak"

        //Note: We need to check previous index because it might be part of the current number.
        if (roman.indexOf(romanKeys[index - 1]) > -1) {
          //remove the previous numeral we worked with 
          //and everything after it since we will replace them
          roman.splice(roman.indexOf(romanKeys[index - 1]));
          //push the current numeral and the one that appeared two iterations ago; 
          //think (IX) where we skip (V)
          roman.push(romanKeys[index], romanKeys[index - 2]);
        } else {
          //else Example:(4) would attemt (IIII) so remove three I's and replace with a V 
          //to get the correct answer of (IV)

          //remove the last 3 numerals which are all the same
          roman.splice(-3);
          //push the current numeral and the one that appeared right before it; think (IV)
          roman.push(romanKeys[index], romanKeys[index - 1]);
        }
      }
      //reduce our number by the value we already converted to a numeral
      num -= curValue;
      count++;
    }
    count = 1;
  }
  return roman.join("");
}
function fromRoman(str1: string) {
  if (str1 == null) return -1;
  var num = char_to_int(str1.charAt(0));
  var pre, curr;

  for (var i = 1; i < str1.length; i++) {
    curr = char_to_int(str1.charAt(i));
    pre = char_to_int(str1.charAt(i - 1));
    if (curr <= pre) {
      num += curr;
    } else {
      num = num - pre * 2 + curr;
    }
  }

  return num;
}

function char_to_int(c: string) {
  switch (c) {
    case 'I': return 1;
    case 'V': return 5;
    case 'X': return 10;
    case 'L': return 50;
    case 'C': return 100;
    case 'D': return 500;
    case 'M': return 1000;
    default: return -1;
  }
}
export { 
  toRoman, 
  fromRoman 
};