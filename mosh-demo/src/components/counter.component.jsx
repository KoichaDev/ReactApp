import React, { Component, Fragment } from 'react';

// This Counter component is going to be controlled component. Whenever the data needs to be modified.
// This component needs to raise an event and have it's parent taking care of modifying the data

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log('prevProps', prevProps);
    console.log('prevState', prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      // Ajax call and get new data from the server
    }
  }

  componentWillUnmount() {
    console.log('Counter - componentWillUnmount()');
  }

  formatCount = () => {
    const { value } = this.props.counter;
    return value === 0 ? 'Zero' : value;
  };

  countIncrement = () => {
    this.state.setState({ value: this.state.value + 1 });
  };

  styles = {
    fontSize: 10,
    fontWeight: 'bold'
  };

  getBadgeClasses() {
    let classes = 'badge m-2 badge-';
    classes += this.props.counter.value === 0 ? `warning` : `primary`;
    return classes;
  }

  renderTags = () => {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map(tags => (
          <li key={tags} style={{ listStyleType: 'none' }}>
            {tags}
          </li>
        ))}
      </ul>
    );
  };

  render() {
    console.log('Counter - Rendered Component');
    return (
      <Fragment>
        <h4>Counter #{this.props.id}</h4>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className='btn btn-secondary btn-sm'
        >
          Increment
        </button>
        <button
          className='btn btn-danger btn-sm m-2'
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </Fragment>
    );
  }
}

export default Counter;
