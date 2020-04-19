import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  // const [deleteButton, setDeleteButton] = useState();

  const inputValue = (e) => {
    setInput(e.target.value);

  }

  const add = () => {
    setTodoList([...todoList, { id: todoList.length + 1, value: input }])
    setInput("")
  }

  const deleteInput = (index) => {
    console.log({ index })
    let deleteFilter = [...todoList]
    deleteFilter = deleteFilter.filter((item,idx)=> idx !== index)
    // console.log(deleteAdd)
    setTodoList(deleteFilter)

    // let deleteFilter2 = [...todoList]
    // deleteFilter2.splice(index, 1)
    // setTodoList(deleteFilter2)
    // การลบด้วย.splice(สั้นกว่า)
  }

  const editInput = (index) => {
    let editFilter = [...todoList]
    editFilter = editFilter.filter((item, idx) => idx === index)
    setTodoList(editFilter);
  }



  return (
    <div>
      <div className="App">

        <div>
          <h1>Todo List</h1>
        </div>
        <br />

        <div>

          <ul>
            {todoList.map((obj, index) =>
              <li key={obj.id}> {obj.value} &nbsp; <button onClick={()=> editInput(index)}>Edit</button> &nbsp; <button onClick={() => deleteInput(index)}> Delete </button>  </li>
            )}
          </ul>

        </div>
        <br />

        <div>
          <input onChange={inputValue} value={input} />
          <button onClick={add}>Add Todo List</button>
        </div>

      </div>
    </div>
  );
}

export default App;
