const prs={
    name : 'jj'
}

function greet(msg,msg2){
    console.log(this)
    console.log(`${msg} is ${this.name } ${msg2}`)
}
//greet('ji')
const newGreet = greet.bind(prs,'hi','bye')
newGreet()// later point of time we can use it