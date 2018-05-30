import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            { name: 'Max', age: 33 },
            { name: 'Karla', age: 32 },
            { name: 'Stef', age: 22 }
        ]
    }

    switchNameHandler = () => {
        // console.log('Was clicked!');
        // don't do this: this.state.persons[0].name='Michael';
        this.setState({
                persons: [
                    { name: 'Miek', age: 33 },
                    { name: 'Karla', age: 32 },
                    { name: 'Stef', age: 22 }
                ]
            })
    }

    render() {
        return (
            <div className="App">
                <h1>I'm a React app</h1>
                <button onClick={this.switchNameHandler}>Switch name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>hey</Person>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
            </div>
        );
        // return React.createElement('div',{className:'App'}, React.createElement('h1',null,'Im a React app!!!'));
    }
}

export default App;
