import React from 'react'
import classes from './Header.module.scss'
import Button from '../UI/Button/Button'

const Header = props => {
  return (
    <header className={ classes.Header }>
      <Button
        onClick={props.addCard}
      >Add Card</Button>
      <Button
        onClick={props.sortCards}
      >Sort Cards</Button>
    </header>
  )
}

export default Header
