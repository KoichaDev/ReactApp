import React, { Component, Fragment } from 'react';
import { NavBar } from './components/layout/navbar.component';
import { SearchPokemon } from './components/pokemon/search-pokemon.component';
import { PokemonList } from './components/pokemon/pokemon-list.component';

class App extends Component {
  state = {
    search: '',
    pokeData: []
  };

  handleChangePokemon = e => {
    this.setState({ search: e.target.value });
  };

  findPokemon = e => {
    console.log(e.target.value);
  };

  getPokemon = async pokemon => {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
      //const res = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`);
      const data = await res.json();
      this.setState({ pokeData: data });
      //console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const {
      pokeData: { name }
    } = this.state;
    console.log(name);
    return (
      <Fragment>
        <NavBar />
        <div className='container py-5'>
          <div className='row'>
            <SearchPokemon
              getPokemon={this.getPokemon}
              handleChangePokemon={this.handleChangePokemon}
              search={this.state.search}
            />
          </div>
          <div className='row'>
            <PokemonList />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
