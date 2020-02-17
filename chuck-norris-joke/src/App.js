import React, { Fragment, Component } from 'react';
import { JokeList } from './Component/joke-list.component';

class App extends Component {
  state = {
    chuckData: []
  };

  getChuckNorrisJokes = async () => {
    try {
      const res = await fetch('http://api.icndb.com/jokes/random');
      const data = await res.json();
      this.setState({ chuckData: data.value.joke });
    } catch (e) {
      console.log(e);
    }
  };

  getYoMamaJoke = async () => {
    try {
      const res = await fetch('https://api.yomomma.info');
      const data = await res.json();
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-xl-4'></div>
          <div className='col-xl-4 py-5'>
            {this.getChuckNorrisJokes && <p>{this.state.chuckData}</p>}

            <JokeList
              getChuckNorrisJokes={this.getChuckNorrisJokes}
              getYoMamaJoke={this.getYoMamaJoke}
            />
          </div>
          <div className='col-xl-4'></div>
        </div>
      </div>
    );
  }
}

export default App;
