import React from 'react'

function Button({className,children}) {
  return (
    <div className={`${className} bg-yellow-400 py-3 px-12 font-bold text-gray-800 text-lg shadow-md rounded cursor-pointer hover:translate-y-[-4px] duration-300`}>{children}</div>
  )
}

export default Button