import React from 'react'
import { MdDone,MdDelete } from "react-icons/md";

function ViewTask() {
  return (
    <div className=''>
        <div className='flex flex-row justify-center items-center'>
            <label className='text-left'>Learn React</label>

            <div className='flex justify-end'>
                <div>
                    <button className='rounded-lg bg-slate-300 p-2 drop-shadow-md m-1 
                        delay-150 hover:-translate-y-1 hover:scale-80 duration-300'><MdDone /></button>
                </div>
                
                <div>
                    <button className='rounded-lg bg-slate-300 p-2 drop-shadow-md m-1 
                        delay-150 hover:-translate-y-1 hover:scale-80 duration-300'><span><MdDelete /></span></button>
                </div>
                
            </div>
        </div>
        
        
    </div>
  )
}

export default ViewTask
