import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  const inputValue = (e) => setInput(e.target.value);

  const add = () => {
    setTodoList([...todoList, { id: todoList.length + 1, value: input }])
    setInput("")

  }


  return (
    <div>
      <div className="App">

        <div><h1>Todo List</h1> </div>
        <br />

        <div>

          <ul>
            {todoList.map(obj => <li key={obj.id}> {obj.value} </li>)}
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
