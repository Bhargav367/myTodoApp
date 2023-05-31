import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
        <h4>welcome to About page</h4>
        <Link to='/'>Back to home</Link> <br/>
        <Link to='/'>Back to Dashboard</Link>
    </div>
  )
}

export default About