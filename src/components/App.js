import React, { Component } from 'react';
var App = React.createClass;
class App extends Component {
    getInitialState(){
          return {
              todos: ['hello', 'ninjas']
          }
    };
    render() {
        return(
        <div>
            <h1>noice</h1>
            <ul>
        <li>{this.props.state.todos[0]}</li>
            </ul>
        </div>
        );
    };
}

export default App;