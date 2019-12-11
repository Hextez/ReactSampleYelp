import React, { Component } from 'react';
import './App.css';
import {BusinessList} from '../BusinessList/BusinessList';
import {SearchBar} from '../SearchBar/SearchBar';
import {search} from '../../util/Yelp'


export default class extends Component{
  constructor(props){
    super(props);
    this.state = {businesses: []};
    this.searchYelp = this.searchYelp.bind(this);
  }
  searchYelp(term,location,sortBy){
    search(term,location,sortBy).then(businesses => {
      if(businesses == undefined)
        return;
        
      this.setState({
        businesses: businesses
      })
    })
  }


  render()
  {  return (
    <div className="App">
      <h1>ravenous</h1>
      <SearchBar searchYelp={this.searchYelp}/>
      <BusinessList businesses={this.state.businesses}/>
    </div>
      )
  }
}
