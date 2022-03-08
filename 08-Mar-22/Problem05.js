function fun(...args){
    let arr=[]
    for (let i of args){
        arr.push(i)
    }
    max=Math.max(...arr)
    sum = arr.reduce((total, a) => total + a, 0);
    return [max, sum/arr.length]
}
max=fun(2,2,2,565,2)
avg=max[1]
max=max[0]
console.log("Maximum number: "+max,"\nTotal average: "+avg)