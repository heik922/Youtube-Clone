import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.run(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <label>Video Search : </label>
          <input
            type="text"
            value={this.state.term}
            onChange={this.onInputChange}
          ></input>
        </form>
      </div>
    );
  }
}

export default SearchBar;
