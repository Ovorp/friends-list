import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      friends: [],
      picture: '',
      name: '',
    };
  }

  updatePicture = (val) => {
    this.setState({
      picture: val,
    });
  };

  updateName = (val) => {
    this.setState({
      name: val,
    });
  };

  addFriend = () => {
    let toAdd = this.state.friends;
    toAdd.push({ picture: this.state.picture, name: this.state.name });

    this.setState({
      friends: toAdd,
      picture: '',
      name: '',
    });
  };

  render() {
    const friends = this.state.friends.map((val) => {
      return (
        <div key={'picture'}>
          <img src={val.picture} alt={`friend`} width="100px"></img>
          <span>{val.name}</span>
        </div>
      );
    });
    return (
      <div onKeyPress={(e) => (e.key === 'Enter' ? this.addFriend() : null)}>
        <span>Picture: </span>
        <input
          onChange={(e) => this.updatePicture(e.target.value)}
          value={this.state.picture}
        />
        <span>Name: </span>
        <input
          onChange={(e) => this.updateName(e.target.value)}
          value={this.state.name}
        />
        <button onClick={this.addFriend}>Add Friend</button>
        {friends}
      </div>
    );
  }
}
