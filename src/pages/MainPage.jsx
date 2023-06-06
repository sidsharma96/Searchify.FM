import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const [search, setSearch] = useState();
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value); // This will update the input value in state
  };

  const submitHandler = (e) => {
    e.preventDefault(); // It will hold the form submit
    // You will get the updated state ( the one that yo have updated on onChange event listener ) here, make your api call here with the updated state
    navigate('/artist', { state: search });
  };

  return (
    <section>
      <SearchBar changeEvent={handleChange} submitEvent={submitHandler} />
    </section>
  );
};

export default MainPage;
