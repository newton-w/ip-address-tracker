import React, { useState } from 'react'
import iconn from '../images/icon-arrow.svg'

function SearchForm({ setIp }) {
  const [input, setInput] = useState('');

  const inputHandler = (e) => {
    setInput(e.target.value)

  }
  const SubmitHandler = (e) => {
    e.preventDefault()
    setIp(input)

  }
  return (
    <form>
      <input
        type="text"
        value={input}
        onChange={inputHandler}
        placeholder='Example 192.123.12.1' />
      <div className="btn" onClick={SubmitHandler}>
        <img src={iconn} alt="search-arrow" />
      </div>
    </form>
  )
}

export default SearchForm