let input="123"
string_array=Array.from(input)
console.log(string_array.reduce(getSum,0));

function getSum(total, num) {
    return total + parseInt(num);
  }


