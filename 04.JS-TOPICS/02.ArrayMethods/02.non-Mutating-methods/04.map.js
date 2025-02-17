const arrObj=[
    {id:1, name: 'abc', product:'asd', price:34},
    {id:2, name: 'bcc', product:'asd', price:84},
    {id:3, name: 'c', product:'asd', price:44},
    {id:4, name: 'd', product:'asd', price:234},
    {id:5, name: 'e', product:'asd', price:74},
]
//map
const data2 = arrObj.map((ele)=>{
    return ele.price > 50
})
console.log('map',data2)
const data22 = arrObj.map((ele)=>{
    if(ele.price > 50){
        //return ele.price > 50
        //return ele
        //return ele.price
        return true
    }
})
console.log('map2',data22)
//it will ittrate every ele & data will come like [false,true,false,true,true] 
//it will create an [] and store the data init
//condition true -- [true,false,..]
//condition false/noData --[false,false] not empty string it will print false
