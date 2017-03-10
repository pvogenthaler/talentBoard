import React from 'react';
import {PubSub} from '../services/pubsub.js'

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    PubSub.publish('newSearch', this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="searchForm">
        <input type="text" value={this.state.value} onChange={this.handleChange} className="searchInput" placeholder="Enter a keyword..."/>
        <input type="submit" value="Search" className="searchButton" />
      </form>
    );
  }

}

module.exports.SearchBar = SearchBar;
