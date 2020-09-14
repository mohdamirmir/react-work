import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'play mario kart'}
    ]
  }

  deleteTodo = (id) => {

    let todos = this.state.todos.filter( todo => {
      return todo.id != id;
    }
    );
    
    this.setState({
        todos: todos
      });

  }

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos : todos
    })
    

  }


  render(){
    return (
      <div className="todo-app container">
          <h1 className = "center blue-text">Todo App</h1>
          <Todos deleteTodo = {this.deleteTodo} todos={this.state.todos}/>
          <AddTodo addTodo = {this.addTodo}></AddTodo>          

      </div>
    );
  }

}

export default App;
