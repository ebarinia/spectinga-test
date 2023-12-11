import React from 'react'

const Header = ( {users} ) => {

  return (

    <div className="flex justify-between ml-[25%] mr-[25%] pt-10 pb-6">
        <img
            className="max-h-6"
            src="https://spectinga.com/assets/spectinga-white-6kLmPpoN.svg"
            alt="spectinga logo"
          />
        <div className="flex">
            <h1 className="text-white pr-5">{users[0].firstName}</h1>
            <img
              className="max-h-5 rounded-full object-cover"
              src="https://upload.wikimedia.org/wikipedia/commons/6/62/Flag_of_France.png"
              alt="image of the locale country flag"
            />
        </div>
    </div>
  )
}

export default Header