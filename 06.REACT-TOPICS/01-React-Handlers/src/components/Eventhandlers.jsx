

export default function Evenhandlers () {

    const fruits =['mango','apple','gova','banaana']
    const handle = ()=>{
        alert('hii hello')
    }
    const handle2 = (e)=>{
        console.log('e',e)
        alert (e)
    }
    const handle3 =(e)=>{
        alert(e)
    }
    const handle4=(e)=>{
        
        let vow ='aeiou'
        let count=0
        for(let char of e ){
            if(vow.includes(char.toLowerCase())){
                console.log('j')
                count +=1
            }
        }
        //console.log(count,'jjj')
        alert(`count is ${count}`)
    }
    return(
        <>
        <h1>event handler</h1>
        <button onClick={handle}>click</button>
        <button onClick={()=>{ handle2('iteam ')}}> date click</button> 
        { fruits.map((ele,i)=>{
            return <li key={i}>
                {ele}
                <button onClick={()=>{handle3(ele)}}>click </button>
                <button onClick={()=>{handle4(ele)}}>click for vowels </button>
            </li>
        })}
        </>
    )
}