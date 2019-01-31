import React from 'react';

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    }
  }

  handleChange = e => {
    this.setState({input: e.target.value})
  }

  render() {
    const { handleAddSubmit } = this.props;
    const { handleChange } = this;
    const { input } = this.state;

  return (
  <form onSubmit={e => {handleAddSubmit(e, input);this.setState({input: ""})}}>
    <input
    value={input}
    onChange={e => handleChange(e)}/>
    <button type="submit">click to add</button>
  </form>
)
  }
}

export default AddTodo;
