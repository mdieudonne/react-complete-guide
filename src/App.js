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

    switchNameHandler = (newName) => {
        // console.log('Was clicked!');
        // don't do this: this.state.persons[0].name='Michael';
        this.setState({
            persons: [
                { name: newName, age: 33 },
                { name: 'Karla', age: 32 },
                { name: 'Stef', age: 22 }
            ]
        })
    }

    nameChangedHhandler = (event) => {
        this.setState({
            persons: [
                { name: 'Max', age: 33 },
                { name: event.target.value, age: 32 },
                { name: 'Stef', age: 22 }
            ]
        })
    }

    render() {
//inline style so it only applies to this single element (button)
        const style ={
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        return (
            <div className="App">
                <h1>I'm a React app</h1>
                <button
                    style={style}
                    onClick={() => this.switchNameHandler('Maxx!')}>Switch name</button>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}/>
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    click={this.switchNameHandler.bind(this, 'Max!')}
                    changed={this.nameChangedHhandler}>hey</Person>
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age}/>
            </div>
        );
        // return React.createElement('div',{className:'App'}, React.createElement('h1',null,'Im a React app!!!'));
    }
}

export default App;
