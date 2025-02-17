const a= [30,20,30,20,50]
const initialValue = 0
const result =a.reduce(function(pre,curr){
    return pre+curr
},0)//we will but initialValue also
console.log('with initialValue',result)

//without initialValue
const result2 =a.reduce(function(pre1,curr1){
    return pre1+curr1
})//if there is no initial vaule it will start index0 means at a[0]it will start
console.log('without initialValue',result2)

//eg
const stock=[
    {id:1, name:"abii", stock:22},
    {id:2, name:"ad", stock:222},
    {id:3, name:"absdii", stock:232}
]

function totalStock(arr){

    const result3= arr.reduce(function(pre,curr){
        console.log('obj',pre,curr)//obj 0 { id: 1, name: 'abii', stock: 22 }
        return pre + curr.stock
    },0)
    return result3

}

console.log('stocke',totalStock(stock))