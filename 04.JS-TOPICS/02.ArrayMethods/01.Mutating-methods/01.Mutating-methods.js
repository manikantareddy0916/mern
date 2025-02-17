let a= [1,'dd',2,3,4,'ad',5,6,'ff','ad','dd']
let b='123456', c=456789

//BASIC ARRAY METHODS
//1
console.log('a.length',a.length)//
console.log('b.length',b.length)//
console.log('at',a.at(1))//1 it will show value at the spicified index, if there is no index undefined, it will work for both string and array.

//2 toString
console.log('a.toString',a.toString())//1,2,3,4,ff,ad,dd
console.log('b.toString',b.toString())//'11111'
console.log('c.toString',c.toString())//'456789'

//3 push
console.log('push',a.push('mirchi'))//8 it will show length of the array & push valu at end
console.log('a',a)
console.log('pop',a.pop())// 'mirchi' it will show removed ele, it will remove last value in array
console.log('a',a)
console.log('unshift',a.unshift('sita'))// it will show length of the array add value at starting & it print lenght of array
console.log('a',a)
console.log('shift',a.shift())// it will remove starting value in array and it show removed ele
console.log('a',a)



//6 SLICE 
//slice -- return a shallow copy
//1.it doesnt effect the original array
//2.it will console sliced data
console.log('aSlice',a) 

//[1, 2, 3, 4, 5, 6,'ff','ad','dd']
// 0  1  2  3  4  5   6    7   8 
console.log('slice1',a.slice(2))// [ 3, 4, 'ff', 'ad', 'dd' ] it doesnt effect the original array
console.log('slice2',a.slice(-2))// [ 'ad', 'dd' ]
console.log('slice3',a.slice(-4,-1))// [ 6, 'ff', 'ad' ]
console.log('slice4',a.slice(2,4))// [ 3, 4 ]
console.log('slice5',a.slice(0,2))// [ 1, 2 ]
console.log('slice6',a.slice(2,0))// []
console.log('slice6',a.slice(0,0))// []
console.log('a',a)

//slice eg-2
o=[ 0, 2, 3, 4, 5, 6 ]
//  0  1  2  3 4  5 
//it will not effect the array
console.log('slice',o.slice(2)) //   [3,4,5,6]
console.log('slice',o.slice(-2)) //   [5,6]
console.log('slice',o.slice(-4,-1)) //   [3,4,5]
console.log('slice',o.slice(2,4)) // [3,4]
console.log('SLICE A',o)//it doesnt change the value o,2,3,4,5,6
console.log('slice',o.slice(0,2)) // [0,2]
console.log('slice',o.slice(2,0)) // [] 0 is nothing but it starts from starting so it is empty


//SPLICE -it will add or remove value in the arrray
//splice --add or remove ele in array
//it effects the original array
console.log('a',a) // [1,2,3,4,5,6,'ff','ad','dd']
//                     0 1 2 3 4 5   6    7   8 
console.log('splice',a.splice(3,2,'3','33'))// [ 4, 5 ] it is array replaced values 
console.log('splice',a.splice(3,0,'oo','pp'))// [] y bcz its not removing ele
console.log('a',a)//[1,2,3,'3','33', 6, 'ff', 'ad','dd']
console.log('splice',a.splice(1,1,'jjjj','jj'),a)//[2][1,'jjjj','jj',3,'3','33',6,'ff','ad','dd']
console.log('splice',a.splice(2,1),a) //[ 'jj' ] [1,'jjjj', 3, '3','33',6,'ff','ad','dd']

//split -it converts string to array
//b='11,11'
console.log('split1',b.split())//['1111']
console.log('split2',b.split(' '))//[ '11111' ]
console.log('split3',b.split(','))//[ '11','111' ]
console.log('split4',b.split(''))//['1','1','1','1'] 

console.log('split5',(b.split('').reverse().join('')))//654321


//JOIN 
//array to stirng
console.log('join',a.join())//   '1,2,3,4,ff,ad,dd'  single string with cama PRINT
console.log('join',a.join(''))//  1234ffaddd         SINGLE STRING PRINT
console.log('join',a.join(']'))// 1]2]3]4]ff]ad]dd  
console.log('join3',a.join(' '))//0 2 3 4 5 6 space
console.log('join4',a.join(','))//0,2,3,4,5,6 camma
console.log('join5',a.join('/'))// 0/2/3/4/5/6 frdbracket
console.log('join',a)//  

//Array find and search methods
//let a= [1,'jjjj',2,'3','33','ad',5,6,'ff','ad','dd']
console.log('indexOF',a.indexOf('ad'))//5 -     true= value, false= -1
console.log('indexOF',a.lastIndexOf('ad'))//9 - true= value, false= -1
console.log('indexOF',a.includes('ad'))//true - true= true, false= false

//Array sort methods
//let a= [1,'jjjj',2,'3','33','ad',5,6,'ff','ad','dd']
d=['apple','aab','cat','bat'], e=[1,4,2,6,33,66,145], f=[1,'abc',2,'aa','aaaaa']
console.log('s',a)
console.log('sort',a.sort())//sort [1,2,'3','33',5,6,'ad','ad','dd','ff','jjjj']
console.log('sort',d.sort())//sort [ 'aab', 'apple', 'bat', 'cat' ]
console.log('sort',e.sort())//sort[1,145,2,33,4,6,66] it was taking only first char

f=[1,'abc',2,'aa','aaaaa'], a= [1,'jjjj',2,'3','33','ad',5,6,'ff','ad','dd']
//the elements are sorted as strings by default, even if the array contains numbers. This results in lexicographical (alphabetical) sorting, where each element is converted to a string and then compared.in numbers convert to string and comparing with full element to another num and consoleing
console.log('sort',a.sort())//['1', '2', '3', '33', '5', '6', 'ad', 'ad', 'dd', 'ff', 'jjjj']
console.log('sort',f.sort())//['1','2','aa','aaaa','abc']

//sort
a.sort()
//The sort() method in JavaScript: 1.Converts every element in the array to a string (if it isn't already a string). 
//2.Compares these strings using lexicographical order (like how words are ordered in a dictionary).
//3.Rearranges the elements based on this order.
// '' is less length, after that it was comparing 1 and 123 1 is smaller than 123 so it will be first, now 123 vs 2 so first indice is 123 and 2 is 1 is grater so after 1,123,2 this is the format , now alphabet order j vs jdk 
console.log('15',a.sort())//['',1,'123',2,3,4,5,6,7,'j','jdk', 'new','new1']



//5 concate
let g=['123','234'], h=['abc','def'], i='123456'
console.log('concat',g.concat(h))//['123','234','abc','def']
console.log('concat',i.concat(h))//'123456','abc','def'
console.log('concat',g.concat(i))//['123','234','123456']

//6
console.log('4',a.pop)//[Function: pop]

