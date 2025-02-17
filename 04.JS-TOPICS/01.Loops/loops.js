const obj= { name:'abish',age: 33,  money: 4444,}
const arrObj= [
    {name:'abish',age: 33,money: 4444,},
    {name:'krish',age: 3763,money: 644,},
    {name:'rakes',age: 383,money: 7844,},
]
const str = 'abcdefghi'
const array =['a','b','c',1,2,3,'d']


//for loop
for(let i= 0; i< 10; i++){
    //console.log('i',i)
}

//FOR-IN
//p-1
for(let key in obj){
    console.log('for-in-obj',obj) //total obj print
    console.log('for-in-obj',key)// keysdata will print 
    console.log('for-in-obj',obj[key])//valuesdata will print
    console.log('for-in-obj',obj.key) //undefined -- will print  bcz we given key === 'key' it will not there in obj
}
//p-2
for(let key in arrObj){
    console.log('for-in-arrayObj',arrObj)//total arrobj print
    console.log('for-in-arrayObj',key)// indexs print -- 0,1,
    console.log('for-in-arrayObj',arrObj[key])//object will print
    console.log('for-in-arrayObj',arrObj.key)// undefined will print --bcz key is 0,1,2
    console.log('for-in-arrayObj-5',arrObj[key].name)// valueData will print
    console.log('for-in-arrayObj-5',arrObj[key]["name"])// valueData will print
}
//p-3
for(let key in str){
    console.log('for-in-string',key) //indexes
    console.log('for-in-string',str[key])//char
}
//p-4
for(let key in array){
    console.log('for-in-array',key)//index
}

//FOR-OF
//p2-1
// for(let key of obj){
//     console.log('for-of-obj')//error obj not ittreable,
// }  // error -- obj is not ittreable  // obj.entries() also not work value not iterable for object
//p2-2
for(let key of arrObj){
    console.log('for-of-Arryobj-key',key)//full obj will print
    console.log('for-of-Arryobj',arrObj[key])//undefinde print
    console.log('for-of-Arryobj',key.name)//valuesData will print
    console.log('for-of-Arryobj',key["name"])//valueData will print
}
//p2-3
for(let key of str){
    console.log('for-of-str',key)//str char will print
}
//p2-4
for(let key of array){
    console.log('for-of-array',key)//char in str
}
//p2-5
//its a one way the way
const price=['j',1,4,56,2,8,77]
//Object.entries(price)) also use this type
for(let [inex,char] of price.entries()){//without entries we cannot use it like this for Array
    console.log('b',inex,char , price.entries())//b 0 j Object [Array Iterator] {}
} 
//explanation:

//p2-6
const ent = Object.entries(obj)
for(let key of ent){
    console.log('j',ent,key,key[0]) //j [ [ 'name', 'abish' ], [ 'age', 33 ], [ 'money', 4444 ] ] [ 'name', 'abish' ]
}