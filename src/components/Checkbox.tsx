import React,{useState} from 'react'
type labelProp= {
    label:string
}
const Checkbox:React.FC<labelProp>= ({label}) => {
    const [checked,setChecked] =useState<boolean>(false)
  return (
    <div className='flex border'>
        <input type="checkbox" checked={checked} onChange={()=>{
            setChecked(value=>!value)
        }} />
        <span>{label}</span>
    </div>
  )
}

export default Checkbox