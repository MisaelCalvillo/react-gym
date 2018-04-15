import React, {Component} from 'react';
import HobbyList from './HobbyList';
import './Pet.css';

class Pet extends Component{
  render(){
    return (
      <div className="card">
        <h2 className="name">Toluca</h2>
        <img src="https://images.unsplash.com/photo-1503610220663-a45ce52a7137?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=720a1c735948451ad32bf3a72bb2a776&auto=format&fit=crop&w=2974&q=80" alt="My beautiful city"/>
        <h5 style={{fontSize: '2em', margin: '2px'}}>To do here:</h5>
        <HobbyList />
      </div>
    );
  }
}

export default Pet;