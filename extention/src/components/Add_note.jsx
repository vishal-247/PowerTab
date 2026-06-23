// import React from 'react'

const Add_note = ({onAdd}) => {

  
  return (
    <div className='w-full h-fit fixed top-5 left-0 flex justify-center '><button onClick={onAdd} className=' bg-white shadow-xl shadow-pink-100 border border-pink-100  text-2xl rounded-full p-3 hover:translate active:translate-0.5 active:bg-pink-50 transition-all duration-30'><span >+</span> Add Note</button></div>
  )
}

export default Add_note 