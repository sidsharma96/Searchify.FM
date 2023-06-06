import React from 'react';
import searchIcon from './images/search-icon.png';
import './styles/searchBar.css';

const SearchBar = ({ changeEvent, submitEvent }) => {
  return (
    <div className='container'>
      <h2 className='site-name'>Searchify.fm</h2>
      <form action='' className='search-bar' onSubmit={submitEvent}>
        <input
          type='text'
          placeholder='Search artist or band'
          name='q'
          onChange={changeEvent}
        />
        <button type='submit'>
          <img src={searchIcon} alt=''></img>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
