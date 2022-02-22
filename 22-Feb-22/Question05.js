let string='Umari'
let input=1234
vowel(string)
reverse(input)

function vowel(string)
{
    let a=['a','e','i','o','u']
    let s=Array.from(string)
    for(let i=0; i<s.length; i++)
    {
        if(a.includes(s[i]))
        {
            console.log(i)
            return;
        }
    }
}

function reverse(input)
{
    let num=parseInt(input)
    let rev=0
    let f=0  
    while(num>0){
    f=num%10
    rev=rev*10 + f
    num=parseInt(num/10)
    }
    console.log(rev)
}
