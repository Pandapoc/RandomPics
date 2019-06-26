import React, { Component } from 'react'
import Card from './Components/Card'
import Header from './Components/Header'

const cards = [{
  img: 1,
  title: 1
}, {
  img: 2,
  title: 2
}, {
  img: 3,
  title: 3
}, {
  img: 4,
  title: 4
}, {
  img: 5,
  title: 5
}, {
  img: 6,
  title: 6
}]

class App extends Component {
  state = {
    userScore: 0,
    topScore: 0
  }

  onClick = () => {

  }

  onFail = () => {

  }

  updateCard = () => {

  }

  shuffleCards = () => {

  }

  render() {
    return (
      <>
        <Header userScore={this.state.userScore} topScore={this.state.topScore} />
        <Card cards={cards} onClick={this.onClick} onFail={this.onFail} updateCard={this.updateCard} shuffleCards={this.shuffleCards} />
      </>
    )
  }
}

export default App
