import React, { Component } from 'react';
import Todos from './components/Todos';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'do something',
        completed: false
      },
      {
        id: 2,
        title: 'do something else',
        completed: false
      },
      {
        id: 3,
        title: 'do nothing',
        completed: false
      },
    ]
  }


  render() {
    console.log(this.state.todos)
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
