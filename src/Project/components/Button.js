import React from 'react'

function Button({text,btnClass,icon,onClick}) {
  return  <button className={`btn ${btnClass}`} onClick={onClick}>
   {text}
    </button>
}

export default Button
