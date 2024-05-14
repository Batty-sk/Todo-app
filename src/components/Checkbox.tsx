import React,{useState} from 'react'
type labelProp= {
    label:string
}
const Checkbox:React.FC<labelProp>= ({label}) => {
    const [checked,setChecked] =useState<boolean>(false)
  return (
    <div className='flex '>
        <input type="checkbox" className='w-10' checked={checked} onChange={()=>{
            setChecked(value=>!value)
        }} />
        <span className='font-mono font-bold text-3xl'>{label}</span>
    </div>
  )
}

export default Checkbox