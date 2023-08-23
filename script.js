function convertToRoman(num) {
  const obj = {
    0: ['M', 1000],
    1: ['D', 500],
    2: ['C', 100],
    3: ['L', 50],
    4: ['X', 10],
    5: ['V', 5],
    6: ['I', 1]
  };

  // Your code here
  let ans = "";
  while (num > 0) {
    while (num >= 1000) {
      num = num % 1000;
      ans = ans + 'M';
    }
    while (num >= 500) {
      num = num % 500;
      ans = ans + 'D';
    }
    while (num >= 100) {
      num = num % 100;
      ans = ans + 'C';
    }
    while (num >= 50) {
      num = num % 50;
      ans = ans + 'L';
    }
    while (num >= 10) {
      num = num % 10;
      ans = ans + 'X';
    }
    if (num > 5) {
      ans = ans + 'V';
      num = num - 5;
      while (num > 0) {
        num = num - 1;
        ans = ans + 'I';
      }
    } else {
     if(num===4){
		 ans=ans+"IV"
		 num=num-4;
	 }
      while (num > 0) {
        num = num - 1;
        ans = ans + 'I';
      }
    }
  }
  return {ans}; // Don't forget to return the converted Roman numeral
}

// You can test your code by running the above function and printing it to the console by pressing the run button at the top. To run it with input 36, uncomment the following line
// console.log(convertToRoman(14));

// Do not edit below this line
module.exports = convertToRoman;
