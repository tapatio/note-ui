import React from 'react'

function About() {
  return (
      // When we return, we need to return a single element. Can use a react
      // fragment. It is like a ghost element - doesn't show in DOM but needed
      // for JSX to return.
      <React.Fragment>
          <h1>About</h1>
          <p>This is Jeff's Note Service v1.0.0.</p>
      </React.Fragment>
  )
}

export default About;