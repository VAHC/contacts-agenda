import React from 'react';
import PropTypes from 'prop-types';

class SearchContact extends React.Component {
  state = {
    searchValue: ''
  };

  handleSearchValueChange = (ev) => {
    this.setState({ searchValue: ev.target.value })
    this.props.onSearch(ev.target.value);
  }

  handleSearchClick = () => this.props.onSearch(this.state.searchValue);

  render() {
    return (
      <div>
        <input value={ this.state.searchValue } onChange={ this.handleSearchValueChange } />
        <button onClick={ this.handleSearchClick }>Buscar</button>
      </div>
    );
  }
}

SearchContact.propTypes = {
  onSearch: PropTypes.func.isRequired
};

export default SearchContact;
