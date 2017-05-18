import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };
  }

  changeType(value){
    this.setState({
      filters: Object.assign({}, this.state.filters, {type: value})
    })
  }

  results(){
    const URL = this.state.filters.type === "all" ? "/api/pets" : `/api/pets?type=${this.state.filters.type}`
    fetch(URL, {method: 'GET'}).then(function(response){
      this.setState({
        pets: response
      })
    })
  }

  adoption(petId){
    this.setState({
      adoptedPets: [...this.state.adoptedPets, petId]
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.changeType.bind(this)} onFindPetsClick={this.results.bind(this)}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.adoption.bind(this)}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
