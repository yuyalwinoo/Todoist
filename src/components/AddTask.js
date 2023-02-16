import React from 'react'

function AddTask() {
  return (
    <div>
        <h1 className="text-3xl text-center">
          ✅Todoist
        </h1>

        <div className="flex flex-row m-6">
            <input type="text" placeholder="What's up?" id="default-input" className="bg-slate-300 rounded-lg p-2.5 drop-shadow-md 
                                                           focus:border m-1 
                                                           delay-150 hover:-translate-y-1 hover:scale-80 duration-300
                                                           "/>

            <button className='rounded-lg bg-slate-300 p-2 drop-shadow-md m-1 w-10
             delay-150 hover:-translate-y-1 hover:scale-80 duration-300'><span>+</span></button>
        </div>

    </div>
  )
}

export default AddTask
