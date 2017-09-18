import React from 'react';
import List from './List.jsx';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todo: '',
      todos: ['Conquer React', 'lift BIGGER', 'Eat big', 'Wake up'],
      isToggleOn: true
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
    event.preventDefault();
    console.log('The link was clicked.');
  }

  handleChange(event) {
    this.setState({todo: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.todo);
    event.preventDefault();
  }

  addTodo(event) {
    event.preventDefault();
    fetch('/addmessage', {
      method: 'POST',
      body: JSON.stringify({text: this.state.todo}),
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin'
    }).then(function(response) {
      console.log('Status: ', response.status);
    }, function(error) {
      console.log
    });

    this.setState({
      todos: [this.state.todo, ...this.state.todos],
      todo: ''
    });
    console.log(this.state.todos);
  }

  removeTodo(id) {
    this.setState(prevState => ({
      todos: this.state.todos.filter(el => el !== id) 
    }));
  }

  render() {
    return (
      <div>
        <h1>First React Component</h1>
        <a href="#" onClick={this.handleClick}> Click me </a>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
        <br/>
        <form onSubmit={this.addTodo}>
          <label>
            Todo:
            <input type="text" value={this.state.todo} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <List list={this.state.todos} removeTodo={this.removeTodo}/>
      </div>
    );
  }
}

export default App;
