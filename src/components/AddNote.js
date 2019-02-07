import React, { Component } from 'react'

export class AddNote extends Component {
  // We want all fields in our state.
  state = {
    body: ''
  }

  onSubmit = (ee) => {
    ee.preventDefault()
    // Need to pass up the body.
    this.props.addNote(this.state.body)
    // Clear the fields, set body back to nothing.
    this.setState({body: ''})
  }

  // State is in this component, so no component drilling going on here.
  // FYI, we can use redux to manage app level state if we were compnent
  // drilling.
  onChangeMe = (ee) => this.setState({ [ee.target.name]: ee.target.value })

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{display: "flex"}}>
        <input
          type="text"
          name="body"
          style={{flex: "10", padding: "5px"}}
          placeholder="Add Note ..."
          value={this.state.body}
          onChange={this.onChangeMe}
        />
        <input
          type="submit"
          value="Submit"
          className="button"
          style={{flex: 1}}
        />
      </form>
    );
  }
}

export default AddNote
