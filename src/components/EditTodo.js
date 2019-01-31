import React from 'react'

class EditTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    }
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({input: e.target.value})
  }

  handleFormSubmit = e => {
    e.preventDefault()
    this.props.handleSubmit(e, this.state.input, this.props.currentKey);
    e.target.reset();
  }
  render() {
    return (
      <form onSubmit={e => this.handleFormSubmit(e)}>
        <input
          val={this.input}
          placeholder="click here to edit"
          onChange={this.handleChange}
        />
        <button type="submit">click here to edit</button>
      </form>
    )
  }
}


export default EditTodo;
