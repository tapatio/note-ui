import React, { Component } from 'react';
import NoteItem from './NoteItem';
import PropTypes from 'prop-types'

class Notes extends Component {
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
