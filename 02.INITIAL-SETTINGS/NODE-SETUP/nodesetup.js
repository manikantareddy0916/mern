//setup a webserver using node.js

//install node
const http = require('http')//require is a keyword it will import and http is module
//create server
const server = http.createServer(function(req,res){
    res.setHeader('Access-Control-Allow-Origin',"*")
    if(req.url == '/'){
        res.end('hime')
    }else if(req.url == '/student'){
        const data =[
            {id:1,name:'jj'},
            {id:2,name:'iji'}
        ]
        res.end(JSON.stringify(data))
    }else if( req.url == '/cource'){
        const cource =[
            {cource: 'mern',cource2:'python'}
        ]
        res.end(JSON.stringify(cource))
    }
})
//and create a port it will be between 3000 to 10000
server.listen(3040, function (){
    console.log('port is running')
})