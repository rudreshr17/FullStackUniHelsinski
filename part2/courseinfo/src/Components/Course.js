import React from 'react';
import ReactDOM from 'react-dom';


const Header = (props) => {
    return (
        <div>
            <h2>{props.course}</h2>
        </div>
    )
  }
  
  const Total = (props) => {
    var total = props.course.reduce(function(sum, course){
        return sum + course.exercises
    }, 0)
  
    return (
        <div>
            <b>Total of {total} exercises</b>
        </div>
    )
  }
  
  const Part = (props) => {
    return (
        <div>
            {props.part} {props.exercises}
        </div>
    )
  }
  
  const Content = (props) => {
    return (
        <div>
            {props.course.map((course, i) => 
            <Part key={i} part={course.name} exercises={course.exercises} />)}
        </div>
    )
  }

  const Course = ({ course }) => {
    return (
        <div>
            <Header course={course.name} />
            <Content course={course.parts} />
            <Total course ={course.parts}/>
        </div>
    )
  }
  export default Course