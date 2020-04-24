import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) =>{
  return(
    <>
    <h1>Course name : {props.course}</h1>
    </>
  )
}

const Part = (props)=>{
  return[
    <>
    <h2>Part name : {props.k1}. No of exercises : {props.k2}.</h2>
    </>
  ]
}


const Content = (props) =>{
  return(
    <>
    <Part k1={props.p1} k2={props.s1}/>
    <Part k1={props.p2} k2={props.s2}/>
    <Part k1={props.p3} k2={props.s3}/>
    </>
  )
}



const Total = (props) =>{
  return(
    <>
    <h2>Total number of exercises :{props.e1+props.e2+props.e3}</h2>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content  p1={course.parts[0].name} p2={course.parts[1].name} p3={course.parts[2].name} s1={course.parts[0].exercises} s2={course.parts[1].exercises} s3={course.parts[2].exercises} />
      <Total e1={course.parts[0].exercises} e2={course.parts[1].exercises} e3={course.parts[2].exercises} />
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))