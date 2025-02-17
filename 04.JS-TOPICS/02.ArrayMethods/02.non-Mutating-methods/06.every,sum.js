//every
const data5 = arrObj.every((ele)=>{
    return ele.price > 50
})
console.log('every',data5)
//if every condition true then it will show true (predicate function)
//some
const data6 = arrObj.some((ele)=>{
    return ele.price > 50
})
console.log('some',data6)
//1.if atleast one conditon need to be true then only it will be print true
