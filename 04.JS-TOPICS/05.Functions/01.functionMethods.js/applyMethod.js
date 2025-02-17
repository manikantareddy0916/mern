const prs={
    name : 'jj'
}

function greet(msg,msg2){
    console.log(this)
    console.log(`${msg} is ${this.name} ${msg2}`)
}
//greet('ji')
greet.apply(prs,['hi','hi2'])