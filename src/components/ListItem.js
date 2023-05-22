import React from 'react'

const ListItem = ({name}) => {
    
  return (
    <div className='p-2'>
        {name} 
        <button className='border px-2'> Done</button>
    </div>
  )
}

export default ListItem