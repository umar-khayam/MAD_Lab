function sanwich_calculator(bread,cheese){
    if(bread<2 && cheese<1){
        console.log(0)
    }
    else{
        i=parseInt(bread/2)
        if(cheese==i)
        {
            console.log(i)
        }
        else if(cheese>i)
        {
            console.log(i)
        }
        else if(cheese<i )
        {
            console.log(cheese)
        }
    }
}
sanwich_calculator(5,4)