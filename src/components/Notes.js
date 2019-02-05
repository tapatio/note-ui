import React, { Component } from 'react';
import NoteItem from './NoteItem';
import PropTypes from 'prop-types'

class Notes extends Component {
  // This function is not being called since we are component drilling
  // up to the App component by calling this.props.markComplete in
  // the render function below.
  markComplete = () => {
    console.log('Hello from Notes.js')
  }

  deleteNote = () => {

  }

  render() {
    // This component has prop types that include an array of notes.
    console.log('Render from Notes.js', this.props.notes)

    return this.props.notes.map((note) => (
        // We want to load an entire new note item here.
        // Pass key/value for NoteItem list.
        <NoteItem key={note.id} note={note}
          markComplete={this.props.markComplete}
          deleteNote={this.props.deleteNote}/>
    ));
  }
}

// PropTypes
Notes.propTypes = {
  notes: PropTypes.array.isRequired
}

export default Notes;
