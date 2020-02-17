import React, { Component, Fragment } from 'react';
import Counter from './counter.component';

class Counters extends Component {
  render() {
    console.log('Counters - rendered Component');
    const { onReset, countersState, onDelete, onIncrement } = this.props;
    return (
      <Fragment>
        <button className='btn btn-primary btn-sm m-2' onClick={onReset}>
          Reset
        </button>
        {countersState.map(counterLoop => (
          <Counter
            // key attribute is used internally on React, so we won't be able to access from our Counter component
            // This is why we have to pass id attribute as a prop to read
            key={counterLoop.id}
            onIncrement={onIncrement}
            onDelete={onDelete}
            counter={counterLoop}
          ></Counter>
        ))}
      </Fragment>
    );
  }
}

export default Counters;
