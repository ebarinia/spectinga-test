import React from 'react'

const Header = ( {users} ) => {

  return (
    <div className='bg-slate-400'>
        <h1 className='flex mx-auto w-1/2'>Welcome {users[0].firstName}</h1>
        <img src="https://spectinga.com/assets/spectinga-white-6kLmPpoN.svg" alt="" />
    </div>
  )
}

export default Header