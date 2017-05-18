const React = require('react');

class Pet extends React.Component {
  constructor() {
    super();
  }


  adopt(){
    this.props.onAdoptPet(this.props.pet.id)
 
  }

  render() {

    const notOwned = <button className="ui primary button" onClick={this.adopt.bind(this)}>Adopt pet</button>
    const owned = <button className="ui disabled button">Already adopted</button>

    return (
      <div className="card">
        <div className="content">
          <a className="header">Pet name </a>
          <p>{this.props.pet.name}{(this.props.pet.gender === "male") ? "♂" : "♀"}</p>
          <div className="meta">
            <span className="date">Pet type</span>
            <p>{this.props.pet.type}</p>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.isAdopted ? owned : notOwned}
        </div>
      </div>
    );
  }
}

module.exports = Pet;
