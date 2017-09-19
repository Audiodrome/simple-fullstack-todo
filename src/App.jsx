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

  componentDidMount() {
    fetch('/getmessages', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin'
    })
    .then((response) => response.json())
    .then((data) => {
      this.setState({
        todos: [...data]
      });
    })
    .catch(err => {
      console.log('Massive error, unable to receive messages. ', err);
    });
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
    event.preventDefault();
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
    })
    .then(response => {
      // return response.json() a promise to return the requested data.
      this.setState({
        todos: [this.state.todo, ...this.state.todos],
        todo: ''
      });
    })
    // another .then to get response.json()
    .catch(err => {
      console.log('Massive error, message unable to send. ', err);
    });
  }

  removeTodo(item) {
    fetch('/removemessage', {
      method: 'DELETE',
      body: JSON.stringify({text: item}),
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin'
    })
    .then(response => {
      console.log('Delete response: ', response);
      this.setState({
        todos: this.state.todos.filter(el => el !== item) 
      });
    });
  }

  render() {
    return (
      <div>
        <h1>Things to do today</h1>
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
