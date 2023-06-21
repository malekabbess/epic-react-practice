// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React, {useRef, useState} from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input
  const [error, setError] = useState(null)
  const [IsLowercase, SetIsLowercase] = useState(false)
  const [username, setUsername] = useState()
  const userInputRef = useRef(null)
  const handleSubmit = event => {
    event.preventDefault()
    
    // onSubmitUsername(userInputRef.current.value)

    // Extra 3
    onSubmitUsername(username)
  }
  const HandleChange = e => {
    // Extra 2
    // const {value} = e.target // RQ : {value}=e.target =! value=e.target
    // value === value.toLowerCase() ? SetIsLowercase(true) : SetIsLowercase(false)
    // setError(IsLowercase ? null : 'Votre username doit etre en miniscule')
    setUsername(e.target.value.toLowerCase())
  }
  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="nameInput"
          onChange={HandleChange}
          ref={userInputRef}
          value={username}
        />
        <div role="alert" style={{color: 'red', fontWeight: 'bold'}}>
          {error}
        </div>
      </div>
      <button disabled={error} type="submit">
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
