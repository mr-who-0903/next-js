import React from 'react'

const People = (props) => {
  return (
    <div className='mt-[4rem]'>
        <p className='text-center'>Name: {props.details.name}</p>
        <p className='text-center'>Age: {props.details.age}</p>
        <p className='text-center'>Branch: {props.details.branch}</p>
    </div>
  )
}

export default People