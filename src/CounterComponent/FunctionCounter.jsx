import React, {useState} from 'react'
import  "./count.css"

const FunctionCounter = () => {
  var[count,handleUpdate] = useState(0)
  return (
    <>
    <div className='mount'>
      <h1>FUNCTIONAL STATE</h1>
      <h1>Counter: {count}</h1>
      <hr/>
      <button onClick={()=>handleUpdate(count + 1)}>Increase</button>
      <button onClick={()=>handleUpdate(count - 1)}>Decrease</button>
    </div>
    </>
  )
}
export default FunctionCounter