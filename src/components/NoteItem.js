import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class NoteItem extends Component {
    // Styling for our notes.
    getStyle = () => {
        return {
            backgroundColor: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted'
        }
    }

    render() {
        // This component has prop types that include an array of notes.
        console.log('Render from NoteItem.js', this.props.note)

        // Use destructuring to pull variables out of props.
        const { id, body } = this.props.note

        return (
            // Going to put style in function so we can change it based on if
            // note has been completed. onChange - uses component drilling to
            // bubble up id.
            <div style={this.getStyle()}>
                <p>
                    { body }
                    <button style={buttonStyle}
                        onClick={this.props.deleteNote.bind(this, id)}>x</button>
                </p>
            </div>
        )
    }
}

// This component has prop types that include a note object.
NoteItem.propTypes = {
    note: PropTypes.object.isRequired
}

const buttonStyle = {
    backgroundColor: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 8px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default NoteItem
