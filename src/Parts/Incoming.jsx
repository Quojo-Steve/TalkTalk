import React from 'react'

const Incoming = (props) => {
  return (
    <div className='bg-blue-600 incoming text-white h-max mt-2 rounded-2xl p-1 px-2 rounded-bl-none '>
      {props.message}
    </div>
  )
}

export default Incoming
