import { AddbtnBig } from './Button'
import React, { useState } from 'react'

type AddTaskProp = {
    handleAddTask:(id:string)=>void
}
const AddTask:React.FC<AddTaskProp> = ({handleAddTask}) => {
    const [input,setInput] = useState<string>('')

  return (
    <div className='flex items-center'>
        <input type="text" placeholder='Enter Your Task' className='p-3 w-72 bg-slate-00' value={input} onChange={(x:React.ChangeEvent<HTMLInputElement>)=>{
            setInput(x.target.value)
        }}/>
        <span onClick={()=>{
            handleAddTask(input)
            setInput('')
        }}>
            <AddbtnBig />
        </span>
    </div>
  )
}

export default AddTask