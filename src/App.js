import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: 'asas1', name: 'name1', age: 33},
      {id: 'ds2ds', name: 'name2', age: 18},
      {id: 'ef5ef', name: 'name3', age: 23}
    ],
    otherState: 'smth',
    showPersons: false,
  };

  togglePersonsHandler = () => {
    const isShowed = this.state.showPersons;
    this.setState({showPersons: !isShowed});
  };

  deletePersonHandler = (personIndex) => {
    // const persons = [...this.state.persons];
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({persons});
  };

  nameChangedHandler = (event, id) => {
    // find element from array by id
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id;
    });
    // copy related element of array & change the name of it
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    // update array
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  };

  render() {
    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid black',
      padding: '6px 10px',
      cursor: 'pointer',
      color: 'white',
      outline: 'none',
    };
    let persons = null;

    if (this.state.showPersons) {
      persons = this.state.persons.map((person, i) => {
        return <Person
            name={person.name}
            age={person.age}
            click={() => this.deletePersonHandler(i)}
            change={(event) => this.nameChangedHandler(event, person.id)}
            key={person.id}
          />
      });

      style.backgroundColor = 'red';
    }

    let btnClasses = [];

    if (this.state.persons.length <= 2) {
      btnClasses.push('red'); // ['red']
    }

    if (this.state.persons.length <= 1) {
      btnClasses.push('bold'); // ['red', 'bold']
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={btnClasses.join(' ')}>This is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
