import './App.css';
import ToDoRow from './components/ToDoRow';
import AddTask from './components/AddTask';
import { useState } from 'react';
function App() {

  const [tasks,setTasks]=useState<string[]>([])

  const handleAdd = (name:string) =>{
    if (name.length)
      setTasks([...tasks,name])

  }
  const handleDelete = (id:number)=>{
    console.log('handiliniggn delete',handleDelete)
    const newTasks = tasks.filter((task, index) => index !== id);
    console.log('fresh arr',newTasks)
    setTasks(newTasks)
  }
  return (
    <div className="App h-screen w-screen flex flex-col justify-center items-center  ">
      <h1 className='text-mono text-5xl  mb-20'>The Future University</h1>
      <div className='p-5 bg-orange-100 flex flex-col justify-center items-center'>
      <h1 className='font-bold text-5xl mb-10'>To-Do App</h1>
      {tasks.map((task,indx)=>{
      return <ToDoRow label={task} no={indx} key={indx} Delete={handleDelete}/>
      })}
      <AddTask handleAddTask={handleAdd} />
    </div>
    </div> 
  );
}

export default App;
