const a ="apple,banana,cherry"

//1
console.log('3',a.split(','))//[ 'apple','banana','cherry' ] seperated 
//2
console.log('1',a.split())//[ 'apple,banana,cherry' ] single array
console.log('2',a.split(' '))//[ 'apple,banana,cherry' ] single array
console.log('4',a.split('/'))//[ 'apple,banana,cherry' ] single array
//3
console.log('5',a.split(''))//[ 'a','p','p','l','e'] indiviual char

//all
const d='asdefaesdfa'
console.log('1',d.split())//1 [ 'app,' ]
console.log('2',d.split(''))//2  [ 'a', 'b', 'c', 'd', 'e' ]
console.log('3',d.split(' '))//3 [ 'abcdeasdeasedf' ]
console.log('4',d.split('e'))//4 [ 'abcd', 'asd', 'as', 'df' ]


//string methods
let a2=' jhh7v765ui37yvhy '

//length
console.log('ength',a2.length)
//toUppercase
console.log('upperCase',a2.toUpperCase())
//toLowerCase
console.log('lowerCase',a2.toLowerCase())
//charAt
console.log('charAt',a2.charAt(3))
//indexOf
console.log('indexOf',a2.indexOf('7'))
console.log('lastindexOf',a2.lastIndexOf('7'))
//includes
console.log('includes',a2.includes('8'))
console.log('includes',a2.includes('7'))
//startsWith
console.log('startsWith',a2.startsWith('v'))//false
console.log('startsWith',a2.startsWith(' '))//true
//endsWith
console.log('endsWith',a2.endsWith('t'))//
console.log('endsWith',a2.endsWith(' '))//
//subString
console.log('substring',a2.substring(2,6))//
//slice
console.log('slice',a2.slice(2,3))//h
console.log('slice',a2.slice(2,-3))//h
console.log('slice',a2.slice(2,0))//h
console.log('slice',a2.slice(0,0))//h
//trim
console.log('trim',a2.trim())//it will trim sarting and ending only
console.log(a2)//trim doesnt apply in a bcz it is primitive & it is unmutable
//replace
console.log('replace',a2.replace('6','man'))
//split
//split a string to array
let b2= '12345678'
console.log('split1',b2.split())//['12345']
console.log(b2)
console.log('split2',b2.split(''))//[1,2,3,4,5...]
console.log(b2)
console.log('split3',b2.split(' '))//['12345678']
console.log('split4',b2.split(','))//[ '1234567' ]
//repeat
console.log('repeat',a2.repeat(2))
console.log('rep',a2)
//concat join 2 or more strings
console.log('concat',a2.concat(b2))//jhhv765uiyvhy 12345678
console.log('concat',a2.concat(a2,b2))//jhhv765uiyvhy jhhv765uiyvhy 12345678
//charCodeAt
console.log('charCodeAt',a2.charCodeAt(3))
//ReplaceAll
//it doesnt change original not-mutable
console.log('replace',a2.replace('j','33'))
console.log('rep',a2)
console.log('replaceAll',a2.replaceAll('7','65'))
console.log('repall',a2)

