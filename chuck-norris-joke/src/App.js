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
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        // Access the result here
        console.log(this.responseText);
      }
    };
    xhttp.open('GET', 'https://api.yomomma.info/', true);
    xhttp.setRequestHeader('Content-type', 'application/json');
    xhttp.setRequestHeader('X-JokesOne-Api-Secret', 'YOUR API HERE');
    xhttp.send();
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
