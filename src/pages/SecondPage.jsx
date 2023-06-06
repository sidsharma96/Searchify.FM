import React from 'react';
import { useLocation } from 'react-router-dom';
import ArtistInfoModel from '../components/ArtistInfoModel';
import TopAlbumsModel from '../components/TopAlbumsModel';
import './styles/secondPage.css';

const SecondPage = () => {
  const location = useLocation();
  const searchTerm = location.state;

  return (
    <section className='background'>
      <div>
        <ArtistInfoModel search={searchTerm} />
      </div>
      <br />
      <div>
        <TopAlbumsModel search={searchTerm} />
      </div>
    </section>
  );
};

export default SecondPage;
