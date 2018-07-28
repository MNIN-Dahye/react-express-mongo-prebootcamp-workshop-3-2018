import React from "react";
import { ParentComponent } from "./PropsDemo";

class App extends React.Component {
  state = {
    todos: [
      {
        description: "buy grapes",
        isDone: false
      },
      {
        description: "buy oranges",
        isDone: true
      }
    ],
    newTodoDescription: "",
  };

  handleOnChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleTodoClick = currentTodo => {
    currentTodo.isDone = !currentTodo.isDone;

    const updatedState = {
      todos: this.state.todos
    };

    this.setState(updatedState);
  };


  handAddTodo = () => {
    // Step 1:get new todo description
    const newTodoDescription = this.state.newTodoDescription
    // Step 2: create new todo object from the description
    const newTodo = {
      description: newTodoDescription,
      isDone: false,
    };
    // Step 3: update react componenet state
    const newTodos = [
      ... this.state.todos,
      newTodo,
    ];

    this.setState({
      todos: newTodos
    });
  }

  render() {
    return (
      <div>
        <h1>My awesome todo list</h1>
        <label htmlFor="newTodoDescription"> Add Todo </label>
        <input
          type="text"
          value={this.state.newTodoDescription}
          name="newTodoDescription"
          id="newTodoDescription"
          onChange={this.handleOnChange}
        />
        <button onClick={this.handAddTodo}>+</button>
        <ul>
          {this.state.todos.map(Todo => {
            let completeClass = "";
            if (Todo.isDone) {
              completeClass = "complete";
            }
            return (
              <li
                className={completeClass}
                onClick={() => this.handleTodoClick(Todo)}
              >
                {Todo.description}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
