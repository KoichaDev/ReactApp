import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  // Constructor is the code that runs first before it's gettling call any other code written
  constructor() {
    super();
    
    this.state = {
      monsters: [],
      searchField: ''
    };
    // .bind() is a method on any function that returns a new function where the context of this is set whatever we passed to it
    // This is very verbose way to write. Every classes new class method that we write, we have to bind it. 
    // We don't want to do this. Use arrow function from ES6 instead. It will understand the context of whatever it was declared it in the first place
    // Arrow function automatically allow you to set 'this' keyword when this thing is defined
    // this.handleChange = this.handleChange.bind(this);

  }
   async componentDidMount() {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      // We want aformat that javaScript understands 
      const data = await res.json();
      this.setState({ monsters: data });
    } catch(err) {
      console.log(err);
    }  
   }

   handleChange = (e) => {
     this.setState({ searchField: e.target.value } )
   }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monsters => {
      // include() is just check weather or not the string value we pass inside of our includes is actually in the string that is being passed on
      return monsters.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox 
          type='search' 
          placeholder='Search Monsters' 
          handleChange={this.handleChange }
        />
        <CardList monsters={filteredMonsters}>
          {/* {this.state.monsters.map(monsters => <h1 key={monsters.id}>{monsters.name}</h1> )} */}
        </CardList>
       
      </div>
    )
  }
}

export default App;

