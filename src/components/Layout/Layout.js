import React, { Component } from 'react'
import classes from './Layout.module.scss'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Aside from '../Aside/Aside'
import CardList from '../../containers/CardList/CardList'

class Layout extends Component {
  
  state = {
    menu: null,
    cards: []
  }

  getRandomInt = () => {
    return Math.floor(Math.random() * (100 - 1)) + 1;  
  }

  addCard = () => {
    const cards = this.state.cards;
    cards.push(this.getRandomInt());
    this.setState({
      cards
    })
  }

  removeCard = (idx) => {
    const cards = this.state.cards;
    cards.splice(idx, 1);
    this.setState({
      cards
    })
  }

  sortCards = () => {
    const cards = this.state.cards;
    cards.sort((a, b) => a - b);
    console.log(cards);
    this.setState({
      cards
    })
  }

  render() {
    return (
      <div className={classes.Layout}>
        <Header
          addCard={this.addCard}          
          sortCards={this.sortCards}      
        />
        <Aside
          isOpen={this.state.menu}
          onClose={this.menuCloseHandler}
        />
        <main>
          <CardList 
            cards={this.state.cards}
            removeCard={this.removeCard}
          />
        </main>
        <Footer />
      </div>
    )
  }

}

export default Layout