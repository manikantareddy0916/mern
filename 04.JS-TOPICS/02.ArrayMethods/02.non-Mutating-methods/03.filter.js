//1.ittrate the array and return new array.
//2.data present then it will print - answer
//3.data not present then it will print - [] empty array

let a=['arju','abish','ashok','balu','arun']

// ES6
// const data = a.filter((ele)=>{
//     console.log(ele)
// })

const data=a.filter(function(ele){
    if(ele.length > 4){
        //console.log('e',ele)
       // return true
        return ele
    }
})
console.log('data',data)//data [ 'abish', 'ashok' ]
//data will come like [true,true,true]it print only condition correcteed
//it will create an [] and store the corrected data init 
// 2.if not data match [] it is
//condition true -- [true,truedataonly]
//condition false/noData --[]  empty string 
