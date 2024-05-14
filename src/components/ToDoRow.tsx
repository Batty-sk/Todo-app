import { DeletebtnSmall } from './Button'
import Checkbox from './Checkbox'
import React, { useState } from 'react'

type todoInfo = {
    label:string,
    //function also to call the deletetion of todoRow
    no:number,
    Delete:any


}
const ToDoRow:React.FC<todoInfo> = ({label, no, Delete}) => {
    const [mouseHovering,setMouseHovering] = useState<boolean>(false)
    
    const handleDelete = (id:number)=>{
Delete(no)
    }
  return (
    <div className='flex w-52 border justify-between items-center' onMouseEnter={()=>{setMouseHovering(true)}} onMouseLeave={()=>{setMouseHovering(false)}}>
        <Checkbox label={label} /> 
       {mouseHovering && <span onClick={()=>handleDelete(1)}> 
        <DeletebtnSmall/>
        </span>}
    </div>
  )
}

export default ToDoRow