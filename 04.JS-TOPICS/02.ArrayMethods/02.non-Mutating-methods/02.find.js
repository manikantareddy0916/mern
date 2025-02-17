//1. predicate function means true or false
//2.data present then it will print - answer 
//3.data not present then it will print - undefined

const fruits = [1,2,3,4,5,6,7,8]
//the varable must hold array not string
const res =fruits.find(function(ele){
   return ele > 4
})
console.log('01',res)

const res2 =fruits.find(function(ele){
    if(ele > 2){
        return true
    }
 })
console.log('02',res2)// 3
const res22 =fruits.find(function(ele){
    if(ele > 200){
        return true
    }
 })
console.log('03',res22)// 3
//data will come at first condition true and ended the loop
//condition true -- data
//condition false/noData -- undefined


const da=[0,22,3,44]
const m = da.find((ele)=>{ //ele =0, 
    return ele > -1 // 0>-1 true, IN RETURN IT IS TRUE so printing ele value //hear it is true/false
}) 
console.log('04',m)
const dm = da.find((ele)=>{ // ele =0 //  so it will go to next ele
    if(ele > -1){  //0 >-1 true
        return ele   // IN RETURN IT IS 0,0 is false,//hear it is value
    }
})
console.log('05',dm)
const dmd = da.find((ele)=>{ //ele =0
    if(ele > -1){ // 0> -1 true
        return true // IN RETURN IT IS TRUE , so it will print ele value
    }
})
console.log('06',dmd)
//dependence upon return value we get 