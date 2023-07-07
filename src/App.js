import React, { useState } from 'react'
import TodoList from './TodoList';
function App() {
  const [inputList,setInputlist] = useState("");
  const [Items,setItems] = useState([]);
  const itemsEvent = (event) =>{
    setInputlist(event.target.value)
  }
  const listofItems = () =>{
    setItems((oldItems)=>{
      return [...oldItems,inputList]
    })
    setInputlist('');
  }
  const deleteItems = (id) =>{
    setItems((oldItems)=>{
      return oldItems.filter((arrelem,index)=>{
        return index!==id;
      })
    })
  }
  return (
    <>
      <div className='main_div'>
        <div className='center_div'>
          <br/>
          <h1>Todo List</h1>
          <br/>
          <input type='text' placeholder='Add a items'
          value={inputList} onChange={itemsEvent}/>
          <button onClick={listofItems}> + </button>
          <ol>
            {/* <li>{inputList}</li> */}
            {Items.map( (itemsval,index) => {
             return <TodoList key={index} id={index}text={itemsval}
             onSelect={deleteItems}
             >
              </TodoList>
            })} 
          </ol>
        </div>
      </div>
    </>
  )
}

export default App
