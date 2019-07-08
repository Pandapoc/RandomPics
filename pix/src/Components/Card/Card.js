import React from 'react'

const Card = props => {
  // console.log(props.cards)
  console.log(props)

  return (
    <>
      {
        props.cards.map(card => (
          <button onClick={props.onClick} id={card.title}>
            {card.title}
          </button>
        ))
      }
    </>
  )
}

export default Card
