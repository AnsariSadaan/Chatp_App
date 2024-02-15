import React, { useState } from 'react'
import {Link}  from 'react-router-dom';

const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className='bg-[#edf3fc] h-screen flex justify-center items-center rounded-lg'>
      <form className='w-[500px] h-[400px] bg-white shadow-md rounded-lg flex flex-col justify-center items-center pt-2'>
        <div className='text-2xl font-bold'>Join</div>
        <input className='w-1/2 p-4 m-2 bg-gray-200 rounded-md' type='text' placeholder='Name' onChange={(e) => { setName(e.target.value) }} required />
        <input className='w-1/2 p-4 m-2 bg-gray-200 rounded-md' type='text' placeholder='Room' onChange={(e) => { setRoom(e.target.value) }} required />
        <Link onClick={(e) => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
        <button className='p-4 mt-8 w-full bg-blue-400 text-white rounded-lg' type='submit'>Sign In</button>
        </Link>
        
      </form>
    </div>
  )
}

export default Join