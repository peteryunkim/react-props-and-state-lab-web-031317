const React = require('react');

const Pet = require('./Pet');

class PetBrowser extends React.Component {

	
  render() {
		const petInfo = this.props.pets.map(e => <Pet pet={e} onAdoptPet={this.props.onAdoptPet} isAdopted={this.props.adoptedPets.includes(e.id)}/>)
		
  	
    return (
      <div className="ui cards">
        {petInfo}
      </div>
    );
  }
}

module.exports = PetBrowser;
