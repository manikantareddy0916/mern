import { useState } from "react"
import todoList from "./todoList"
import TodoList from "./todoList"


function App() {

  const [todo, setTodo] = useState([])

  const handleClick =()=>{
    const title = prompt('enter the todo')
    if(title){
      const data = {
        title : title,
        id : Number(new Date()),
        isCompleted : false
      }
      setTodo([...todo,data])
    }
  }

  const handleRemove =(e)=>{
    
      const data = todo.filter ((ele)=>{
        return ele.id != e
      })
      setTodo(data)
    
  }

  const handleCheck =(e)=>{
      const newdata = todo.map((ele)=>{
        if(ele.id == e){
          return {...ele, isCompleted : !ele.isCompleted}
        }else{
          return {...ele}
        }
      })
      setTodo(newdata)

  }
  console.log('d',todo)


  
  return (
    <>
    <h1>Excerices</h1>
    <p>Todo App</p>
    <h2>Total todos - {todo.length}</h2>
    <button onClick={handleClick}>Add todo</button>
    { todo.length == 0 ? 
     <p>totdo list is empty</p> 
     :
     <TodoList 
        tododata={todo} 
        handleRemove={handleRemove}
        handleCheck={handleCheck}
        />
    }
    </>
  )
}

export default App
