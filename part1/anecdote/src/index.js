import React, { useState } from 'react'
import ReactDOM from 'react-dom'
const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
  
)



const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(6).join('0').split('').map(parseFloat))
  const [mostVotes, setMostVotes]=useState(0)


  const handleRandom =() =>{
    const newSelected = { 
      ...selected,
      selected: Math.floor(Math.random() * 6)
    }
    setSelected(newSelected.selected)

  
  
  }

  const countVotes = () =>{

    const countSelected = { ...votes}
    countSelected[selected]+=1
    setVotes(countSelected)
    if(countSelected[selected]>=countSelected[mostVotes])
    {
      setMostVotes(selected)
    }



  }  
  
  return (
    <>
      <h1>Anecdote of the day!</h1>
      <p>{props.anecdotes[selected]}</p>
      <Button onClick={()=>handleRandom()} text="next"/>
      <Button onClick={()=>countVotes()} text="vote"/>
      <h1>Most voted Anecdote!</h1>
      <p>With {votes[mostVotes]} votes. The anecdote leading with the most votes is :</p>
      <p>{props.anecdotes[mostVotes]}</p>
    </>

    
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)