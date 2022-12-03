import React, { useState } from 'react'

export const Counter = ({ increaseFruits, decreaseFruits }) => {
  

  return (
    <div className='counter-container'>
      <p className='instructions'>👉Use the buttons bellow to increase or decrease the amount of fruits in your basket!</p>
      <div className="fruit-counters">
          <button onClick={(e)=> decreaseFruits(e)} className="decrease"  name='bananas'>-</button>
            🍌Bananas
          <button onClick={(e)=> increaseFruits(e)} className="increase"  name='bananas'>+</button>
      </div>
      <div className="fruit-counters">
        <button onClick={(e)=> decreaseFruits(e)} className="decrease"  name='apples'>-</button>
          🍎Apples
        <button onClick={(e)=> increaseFruits(e)} className="increase"  name='apples'>+</button>
      </div>
      <div className="fruit-counters">
        <button onClick={(e)=> decreaseFruits(e)} className="decrease"  name='tomatoes'>-</button>
          🍅Tomatoes
        <button onClick={(e)=> increaseFruits(e)} className="increase"  name='tomatoes'>+</button>
      </div>
    </div>
  )
}
