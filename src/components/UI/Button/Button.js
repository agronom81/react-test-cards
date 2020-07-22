import React from 'react'
import classes from './Button.module.scss'

const Button = props => {

  return (
    <button 
      onClick={props.onClick}
      className={ classes.Button }
    >
      {props.children}
    </button>
  )

}

export default Button