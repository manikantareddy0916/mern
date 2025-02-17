const obj={
    name:'ram',
    age:33,
    data:function (){
        return 'i dont no '+ this.name
        //return 'i dont no '+obj.name
    },
    reviews:'not'
}
console.log('obj',obj)


//1 add value
//1way bracket
obj['newKey'] = 'BracketnewKeyValue'
//2way dot
obj.newDot = 'dotValue'
console.log(obj)

//2 get key & values
//1-way dot 
console.log('dot',obj.newKey)//
//2-way Bracket 
console.log('bracket',obj['newKey'])

//3 update value
//1st way dot
console.log('update',obj.newKey = 'change newKey')
console.log('updatedd',obj)
//2nd way bracket
console.log('2update',obj['newKey'] = 'again chage newKey')
console.log('2updated',obj)

//4 delete value
delete obj.reviews

//5 access only key
//1st way
console.log('access only key',Object.keys(obj))// [ 'name', 'age', 'data', 'newKey', 'newDot' ]
//2nd way
for(let key in obj){
    console.log('key',key)
}


//6 access only value
//1st way
console.log('access only valyes',Object.values(obj))// [ 'ram', 33, [Function: data], 'again ]
//2nd way
for(let key in obj){
    console.log('key',obj[key])
}


//7 object length
console.log('lenght',obj.length)//undefined
console.log('lengthObj ',Object.keys(obj))//['name','age','data']
console.log('lengthObj ',Object.keys(obj).length)//4
console.log('lengthObj ',Object.values(obj).length)//4

//8 property present or not
console.log('property',obj.hasOwnProperty('name'))//
console.log('property2','name' in obj)//

//9 for in good for only for object bcz for of will be not ittreate error
for(let key in obj){
    console.log('for in --','obj[key]',obj[key],'key',key)
    //console.log('for in2',obj.key)//undefined
}

//10 OBJECT ENTIRIS
console.log('entries',Object.entries(obj))//

//11 in
console.log('in','name' in obj)//

//12 methods
//using methods in obj
// we cannot use arrow function in methods in object
// arrow function doestn have a value for this key word on its own , it will refer to the value of this from its outer scope and now it is empty {} , or globel object it depends

const objCount ={
    count : 10,
    count : 33,
    up : function(){
        this.count += 1
        return this.count
    },
    down : function(){
        this.count += -1
        return this.count
    },
    reset : function(){
        this.count = 100
        return this.count
    },
    multiple : function(num){
        this.count *= num
        return this.count
    },

}

// count 
console.log('inc',objCount.count)
// count increse 
console.log('inc',objCount.up())
// count decrese 
console.log('inc',objCount.down())
//count reset
console.log('reset',objCount.reset())
//count multiple 
console.log('multiple',objCount.multiple(2))

//13 amount adding
const data=[
    {name: 'abc', bud:110},
    {name: 'afabdc', bud:20},
    {name: 'auhbc', bud:30}
]
let d=0
for(let key in data){
    console.log('key',data[key].name)
    d += data[key].bud
}
console.log('d',d)
const res= data.reduce((pre,cur)=>{
    //console.log('pre',pre,'cur',cur)
    return pre + cur.bud
},0)
console.log('l',res)

//map
let j=0
let mapp=data.map((ele)=>{
    j += ele.bud
})
console.log('map',j)