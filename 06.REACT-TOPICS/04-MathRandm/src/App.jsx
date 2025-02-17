import { useState } from "react"

function App() {

  const [data, setData] = useState([])

  const handleClick =()=>{
    const rnd ={
      id : Number (new Date()),
      random :Math.round(Math.random() * 100)
    }
      setData([...data, rnd])
  }

  const handleRemove = (id)=>{
    const da = data.filter((ele)=>{
      return ele.id != id
    })
    setData(da)
    console.log('rm',da)
  }

  const handlEvenRemove =()=>{
    const da = data.filter((ele)=>{
      return !((ele.random%2) == 0)
    })
    setData(da)
  }

  console.log('d',data)
  return (
    <>
      <h1>Random Number</h1>
      <button onClick={handleClick}>Click to get random number</button>
      {data.map((ele)=>{
        return <li key={ele.id}>
          {ele.random}
          <button onClick={()=>{handleRemove(ele.id)}}>remove</button>
        </li>
      })}
      <button onClick={handlEvenRemove}>Remove even n.o</button>
    </>
  )
}

export default App
