import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    // Need to use Link to use links from router.
    return (
        <header style={headerStyle}>
            <h1>Jeff's Note Service</h1>
            <Link style={linkStyle} to='/'>Home</Link> | <Link style={linkStyle} to='/about'>About</Link>
        </header>
    )
}

// Put style stuff in with component, better than separating out. Having 
// everything in one spot is nice and convenient.

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

const headerStyle = {
    // Dark gray.
    background: '#333',
    // White text color.
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}
  
export default Header