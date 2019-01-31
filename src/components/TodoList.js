import React from 'react';
import EditTodo from './EditTodo';

const TodoList = ({ todos, handleDoubleClick, handleFormSubmit}) => (
  <ul>
    {
      todos.map((x,i) => {
        return (
          <div
            key={i}
            className={!todos[i].completed? "todo-incomplete": "todo-completed"}>
            <li onDoubleClick={handleDoubleClick}>{x.text}</li>
            <EditTodo handleSubmit={handleFormSubmit}
                      currentKey={i}/>

          </div>
        )
      })
    }
  </ul>
)

export default TodoList;
