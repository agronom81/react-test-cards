import React from 'react'
import classes from './CardList.module.scss'

const CardList = props => (
  <ul className={classes.CardList}>
    { props.cards.map((card, index) => {
      return (
        <li 
          key={index}
        >
          <div>
            <button
            onClick={() => props.removeCard(index)}
            >X</button>
            <span>{card}</span>
          </div>          
        </li>
      )
    }) }
  </ul>
)

export default CardList

