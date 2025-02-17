const prs={
    name : 'jj'
}

function greet(msg){
    console.log(this)
    console.log(`${msg} is ${this.name}`)
}
//greet('ji')
greet.call(prs,'hi')