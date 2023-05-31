import React from 'react'
import { Link } from 'react-router-dom'
import './index.css';

const Home = () => {
  return (
    <div>
        <h4>
            welcome to home page!!!
        </h4>
        <Link to='/dashboard' className='Link' >Dashboard</Link> {" "}
        <Link to='/about' className='Link'>About</Link>
    </div>
  )
}

export default Home