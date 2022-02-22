let input="1234"
string_array=Array.from(input)
const result=string_array.filter(even_sum)
console.log(result.reduce(getSum,0)); 
function even_sum(num)
{
    if (num%2==0)
    {
        return num
    }
}

function getSum(total, num) {
    return total + parseInt(num);
  }
