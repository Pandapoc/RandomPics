import React, { Component } from 'react'
import Card from './Components/Card'
import Header from './Components/Header'

class App extends Component {
  state = {
    userScore: 0,
    topScore: 0,
    clicked: [],
    cardNums: [1, 2, 3, 4, 5, 6],
    cards: [{
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
  }

  onClick = e => {
    if ((this.state.userScore >= 5) && (this.state.cardNums.indexOf(parseInt(e.target.id)) >= 0) && (this.state.clicked.indexOf(parseInt(e.target.id)) < 0)) {

      let score = this.state.userScore
      score += 1
      this.setState({ userScore: score, userScore: score })

    } else if ((this.state.userScore <= 5) && (this.state.cardNums.indexOf(parseInt(e.target.id)) >= 0) && this.state.clicked.indexOf(parseInt(e.target.id)) < 0) {

      console.log('help')

      let clicked = this.state.clicked
      clicked.push(parseInt(e.target.id))
      this.setState({ clicked })

      let newCardsArr = this.state.cards
      for (let i = (newCardsArr.length - 1); i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        let x = newCardsArr[i]
        newCardsArr[i] = newCardsArr[j]
        newCardsArr[j] = x
      }

      let score = this.state.userScore
      score += 1

      this.setState({ cards: newCardsArr, userScore: score })

    } else if ((this.state.cardNums.indexOf(parseInt(e.target.id)) >= 0) && (this.state.clicked.indexOf(parseInt(e.target.id)) >= 0)) {
      let score = this.state.userScore

      this.setState({ clicked: [], topScore: score, userScore: 0 })
    }

  }

  onWin = e => {

  }

  onFail = e => {



  }

  updateCard = e => {
    let clicked = this.state.clicked
    clicked.push(parseInt(e.target.id))
    this.setState({ clicked })
    this.shuffleCards()
  }

  shuffleCards = e => {
    let newCardsArr = this.state.cards
    for (let i = (newCardsArr.length - 1); i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1))
      let x = newCardsArr[i]
      newCardsArr[i] = newCardsArr[j]
      newCardsArr[j] = x
    }
    this.setState({ cards: newCardsArr })
  }

  render() {
    return (
      <>
        <Header userScore={this.state.userScore} topScore={this.state.topScore} />
        <Card cards={this.state.cards} onClick={this.onClick} />
      </>
    )
  }
}

export default App
