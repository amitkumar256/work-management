import Image from 'next/image';
import login from "../../assets/login.svg"
import React from 'react'

export const metadata={
    title: "Add Task : Work Manager",
};
const AddTask = () => {
  return (
    <div className='grid grid-cols-12  '>

<div className=' col-span-4  col-start-5 shadow-sm p-5'>

<div className='my-8 flex justify-center'>
<Image src={login}
/>
</div>
  <h1 className='text-2xl text-center'>Add your task here!!</h1>
  <form action="">
    <div className='mt-4'>
      <label htmlFor="task_title"
      className='block text-sm font-medium'>
        Title
      </label>
<input type='text' id='"task_title' className='w-full p-2 rounded-3xl bg-gray-400 focus:ring-gray-200 border border-gray-700  mt-2'/>
    </div>

    <div className='mt-4'>
      <label htmlFor="task_content"
      className='block text-sm font-medium'>
        content
      </label>
<textarea  id='"task_content' className='w-full p-2 rounded-3xl bg-gray-400 focus:ring-gray-200 border border-gray-700  mt-2' rows={5}/>
    </div>
    <div className='mt-4'>
      <label htmlFor="task_status"
      className='block text-sm font-medium'>
        status
      </label>
      <select id='task_status'
      className='w-full p-3 rounded-3xl bg-gray-400 focus:ring-gray-400 border'>
       <option value="none" selected disabled>---select status---</option>
        <option value="pending">pending</option>
        <option value="completed">completed</option>
     </select>
    </div>
    <div className='mt-4 flex justify-center'>
      <button className='bg-blue-700 py-3 px-3 rounded-lg hover:bg-blue-800'>add Todo</button>
      <button className='bg-red-700 py-3 px-3 rounded-lg hover:bg-blue-800'>clear</button>

    </div>

  </form>
  </div>   
   </div>
  )
}

export default AddTask