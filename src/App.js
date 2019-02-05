import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/layouts/Header'
import AddNote from './components/AddNote'
import Notes from './components/Notes'
import About from './components/pages/About'
import axios from 'axios'

// Notes:
// Normally would store note-service URLs in config/default.json.
// Note editing not implemented.
// Needs unit tests.

// Global CSS.
import './App.css';

class App extends Component {
  // Add state to contain Notes.
  state = {
    notes: [
    ]
  }

  // Get notes from backend into state.
  componentDidMount() {
    axios.get('http://localhost:8081/api/v1/note/all')
      .then(res => {
        console.log("from App.js note-service backend response:", res.data)
        this.setState({ notes: res.data })
      })
  }

  // Use a map filter to return on notes where the id does not match the 
  // id passed into deleteNote.
  deleteNote = (id) => {
    console.log('from App.js component drilled deleteNote id:', id)
    axios.delete('http://localhost:8081/api/v1/note', {
      headers: { 
        'Content-Type': 'application/json' 
      },
      data: JSON.stringify([ 
        id 
      ])
    })
    .then(res => {
      this.setState({ notes: [...this.state.notes.filter(note => note.id !== id)]})
    })
    .catch(err => {
      console.log("Error occurred while deleting note: " + err)
    })
  }

  // Add note.
  addNote = (body) => {
    console.log("from App.js component drilled addNote body:", body)
    let note = [{body}]
    axios.post('http://localhost:8081/api/v1/note', note)
    .then(res => {
      let resNote = res.data[0]
      console.log("from App.js addNote axios post response:", resNote)
      this.setState({ notes: [...this.state.notes, resNote ]})
    })
    .catch(err => {
      console.log("Error occurred while saving note: " + err)
    })
  }

  // Render is a lifecycle method, used to render the component in the browser.
  // Only required lifecycle method.
  render() {
    console.log('Render from App.js', this.state.notes)
    return (
        // Using react router.
        // Router will load notes, addNote, and deleteNote on / route.
        // Router will load About on /about route.
        <Router>
        <div className='App'>
          <div className='container'>
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddNote addNote={this.addNote} />
                <Notes notes={this.state.notes}
                  markComplete={this.markComplete}
                  deleteNote={this.deleteNote} />
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
