

export default function TodoList(props){

  const { handleCheck, handleRemove, tododata} = props
  console.log('f',props)
    return(
        <>
        <ul>
        {tododata.map((ele)=>{
          return (
            <li key={ele.id}>
              <input type="checkbox" checked={ele.isCompleted} onChange={()=>{handleCheck(ele.id)}}/>
              {ele.title}
              <button onClick={()=>{handleRemove(ele.id)}}>Remove</button>
              </li>
            
          )
        })}
      </ul>
        </>
    )
}