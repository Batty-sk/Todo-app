import React from 'react';
import './App.css';
import ToDoRow from './components/ToDoRow';
function App() {

  const handleAdd = () =>{
    console.log('added the task successfully! ')
  }
  const handleDelete = (id:number)=>{
    console.log('handiliniggn delete',handleDelete)
  }
  return (
    <div className="App">
      <ToDoRow label='batman' no={1} Delete={handleDelete}/>
    </div>
  );
}

export default App;
