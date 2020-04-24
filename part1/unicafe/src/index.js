import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
  
)
const StatTable =({text,value})=>{
return(<tr>
      <td>{text}</td>
      <td> {value}</td>
      </tr>)
}



const Statistics = ({good,neutral,bad}) =>{
  const all = good + bad +neutral
  const avg = (good-bad)/all
  const positive = (good/all)*100
  if(good==0 && bad==0 && neutral==0)
  {
    return(
      <>
      <p>No feedback given</p>
      </>
    )
  }
  return(
    <>
      <table>
      <StatTable text = "good" value ={good}/>
      <StatTable text = "neutral" value ={neutral}/>
      <StatTable text = "bad" value ={bad}/>
      <StatTable text = "all" value ={all}/>
      <StatTable text = "Average" value ={avg}/>
      <StatTable text = "Positive" value ={positive}/>
      </table>

    </>
  )



}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  


  return (
    <>
      <h1>Give feedback</h1>
      <Button onClick={()=>setGood(good+1)} text="good"/>
      <Button onClick={()=>setNeutral(neutral+1)} text="neutral"/>
      <Button onClick={()=>setBad(bad+1)} text="bad"/>
      <h1>Statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral}/>
    

    
    </>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)