import React from 'react'

const Basket = ({ fruits }) => {
  return (
    <div>
      {
        fruits.bananas > 0 || fruits.apples > 0 || fruits.tomatoes > 0 ? 
        <div className='basket-container'>
          <h3>You currently have these fruits in your basket</h3>
          <p>🍌Bananas: {fruits.bananas}</p>
          <p>🍎Apples: {fruits.apples}</p>
          <p>🍅Tomatoes: {fruits.tomatoes}</p>
        </div>
        :
        <p className='add-fruits'>Add fruits to your basket!</p>
      }
    </div>
  )
}

export default Basket
