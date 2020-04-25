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

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  const Course = ({ course }) => {
    return (
        <div>
            <Header course={course.name} />
            <Content course={course.parts} />
            <Total course ={course.parts}/>
        </div>
    )
}

  return (
    <div>
      <h1>Web development course</h1>
      {courses.map((courses,i)=><Course key={i} course={courses}></Course>)}
      
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))