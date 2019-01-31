import React, { Component } from 'react';
import './App.css';
//components
import TodoList from './components/TodoList';
import CurrentFilter from './components/CurrentFilter';
import AddTodo from './components/AddTodo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          text: "foo",
        completed: false
        },
        { text: "bar",
          completed: false
        }],
        currentFilter: true
    }
  }

  mapStateToProps = state => {
    if(this.state.currentFilter) {
      return state.filter(x => !x.completed)
    }
    else {
      return state.filter(x => x.completed)
    }
  }

  toggleFilter = (e) => {
    e.preventDefault();
    this.setState({currentFilter: !this.state.currentFilter})
  }

  handleDoubleClick = e => {
    e.preventDefault();
    const val = e.target.innerText;
    let todos = [...this.state.todos];
    let todo = {};
    Object.keys(todos).forEach((x,i) => {
      if (this.state.todos[i].text === val) {
        todo = this.state.todos[i];
        todo.completed = !todo.completed;
        todos[i] = todo
      }
    })
    this.setState({todos: todos})
  }

  handleFormSubmit = (e, newVal, currKey) => {
    e.preventDefault();
    let todos = [...this.state.todos];
    let todo = todos[currKey];
    todo.text = newVal;
    todos[currKey] = todo;
    this.setState({todos: todos})
  }

  handleAddSubmit = (e,input) => {
    e.preventDefault();
    this.setState(prev => ({
      todos: [...prev.todos, {text: input, completed: false}]
    }))
  }

  render() {
    const { todos, currentFilter } = this.state;
    const {
      handleDoubleClick,
      handleFormSubmit,
      handleAddSubmit,
      mapStateToProps,
      toggleFilter } = this;
    return (
      <div className="App">
        <header className="App-header">
          <h1>{`You have ${todos.length} items on the agenda.`}</h1>
          <h3>{` your current filter is set to...${currentFilter? "Show ALL": "Show Completed"}`}</h3>
          <CurrentFilter toggleFilter={toggleFilter}/>
          <h4>Add Todo here<span role="img" aria-label="point downwards">👇</span></h4>
          <AddTodo
            handleAddSubmit={handleAddSubmit}/>
        </header>
        <TodoList
          todos={mapStateToProps(todos)}
          handleDoubleClick={handleDoubleClick}
          handleFormSubmit={handleFormSubmit}
        />

      </div>
    );
  }
}

export default App;
