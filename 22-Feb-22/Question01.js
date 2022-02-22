let input="123"
let k=1
for (let i = input.length; i >0 ; i--) {
    if (k==i)
    {
        console.log(input[k]); 
    }
    else
    {
        continue;
    }
  }