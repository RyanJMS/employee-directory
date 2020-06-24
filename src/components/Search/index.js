import React, { Component } from "react";
import "./style.css";

class Search extends Component {
  state = {
    firstName: "",
    lastName: "",
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleSearch = (event) => {
    event.preventDefault();

    this.setState({
      firstName: "",
      lastName: "",
    });
  };

  render() {
    return <div></div>;
  }
}

export default Search;
