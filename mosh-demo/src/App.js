import React, { Fragment, Component } from 'react';
import Counters from './components/counters.component';
import { NavBar } from './components/navbar.component';
import './App.css';

class App extends Component {
  // This is a collection of an object for the component needs
  constructor() {
    super();
    //  constructor() will only called only once when an instance of a class is created
    console.log('App - Constructor()');
    // setState() doesn't work, because this method can only be called when a component is rendered and placed in the DOM
    // this.setState()
  }

  componentDidMount() {
    // We can do Ajax call - we can get a list of movies from a server and pass the list on the setState() method
    // this.setState({ movies });
    console.log('App - componentDidMount()');
  }

  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 4 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleIncrement = counter => {
    // We want to "copy/clone" the original array of the object, so we can modify/update the values
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    //counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters: counters });
  };

  handleReset = () => {
    const resetCounters = this.state.counters.map(counters => {
      counters.value = 0;
      return counters;
    });
    this.setState({ counters: resetCounters });
  };

  handleDelete = counterID => {
    console.log(counterID);
    const counters = this.state.counters.filter(
      counter => counter.id !== counterID
    );
    this.setState({ counters: counters });
  };

  render() {
    console.log('App - Rendered');
    return (
      <Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className='container'>
          <Counters
            countersState={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </Fragment>
    );
  }
}

export default App;
