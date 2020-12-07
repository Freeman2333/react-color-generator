import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [stepOfTones, setNumberStepOfTones] = useState(10)
  const [list, setList] = useState(new Values('#f15025').all(stepOfTones))

  const handleSubmit = e => {
    e.preventDefault()
    try {
      let colors = new Values(color).all(stepOfTones)
      setList(colors)
    } catch (error) {
      setError(true);
      console.log(error);
    }
  }

  const handleTonesSubmit = e => {
    e.preventDefault()
    try {
      let colors = new Values(color).all(stepOfTones)
      setList(colors)
    } catch (error) {
      setError(true);
      console.log(error);
    }
  }

  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <label>Color:</label>
          <input type="text" value={color} onChange={e => { setColor(e.target.value) }} placeholder='#f15025' className={`${error ? 'error' : null}`} />
          <button className="btn" type="submit">submit</button>
        </form>
        <form onSubmit={handleTonesSubmit} className="tones-form">
          <label>Number of Tones:</label>
          <input type="text" value={stepOfTones} onChange={e => { setNumberStepOfTones(parseInt(e.target.value)) }} placeholder={stepOfTones} className={`${error ? 'error' : null}`} />
          <button className="btn" type="submit">submit</button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor key={index} {...color} index={index} hexColor={color.hex}/>
          )
        })}
      </section>
    </>
  )
}

export default App
