//1
function f1(){
    n = 100
    console.log('n',n)//100
}
f1()
console.log('n',n)//100 it was getting from f1() 
//1.1
function f11(){
    const n1 = 100
    console.log('n1',n1)//100
}
f11()
//console.log('n1',n1)//not defind reference error



//2
let n2=10
function f2(){
    n2 = 100
    console.log('n2',n2)//100
}
f2()
console.log('n2',n2)//10
//2.2
let n22=10
function f22(){
    let n22 = 100
    console.log('n22',n22)//100
}
f22()
console.log('n22',n22)//10
//2.3
// const n23=10
// function f2(){
//     n23 = 100 //reasin
//     console.log('n23',n23)//100
// }
// f23()
// console.log('n23',n23)//type error re assign

//3
var n3 =12
function f3(){
    n3 =55
    console.log('f3',n3)//55
}
f3()
console.log('f3',n3)//55 re-assined so it is latest value
//3.2
var n32 =12
function f32(){
    var n32 =55 
    console.log('f32',n32)//55 getting its from inside function
}
f32()
console.log('f32',n32)//12 getting its from outside declered variable

//4
let n4=10
function f4(){
    const n4=33
    console.log('f4',n4)//33
}
f4()
console.log('f4',n4)//10


//5
function f5(d){
    console.log('f5',d)
}
f5(22)
//5.2
function f52(d){
    d = 44 //reassign ok
    console.log('f52',d)
}
f52(22)
//5.3
// function f523(d){
//     let d = 434 //let redecleration not-ok
//     console.log('f523',d) //type error reassing error
// }
// f523(22)
//5.4
function f524(d){
    var d = 44 //var reassign ok
    console.log('f524',d)
}
f524(22)
//console.log('varf524',d) //not defined

//decleartion example
//1
// for( let i=0; i< 5; i++){
//     console.log(i)
// }
// console.log('let,const',i) //not defined bcz it is block scope

//2
for( var i=0; i< 5; i++){
    //console.log(i)
}
console.log('var',i) //5 because it is function Scope

//3
for( let i=0; i< 5; i++){
    const n = i+ 5 //hear it is not re-assining it just creating new block for each ittration
    console.log(i,n)
}
console.log('let',i) //not defined

//4
for( let i=0; i< 5; i++){
    const re=[]
    re.push(i)
    console.log(i,n,re)
}