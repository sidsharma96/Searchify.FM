import { Link, useNavigate } from 'react-router-dom';
import { ApiUrlHandler } from '../util/ApiUrlHandler';
import useFetch from '../util/UseFetch';
import './styles/artistInfo.css';
import { useEffect } from 'react';

const ArtistInfoModel = ({ search }) => {
  const navigate = useNavigate();
  const getInfoUrl = ApiUrlHandler(search).getInfoUrl;
  const getInfo = useFetch(getInfoUrl);

  useEffect(() => {
    if (getInfo.data?.error) {
      return navigate('/error');
    }
  }, [getInfo.data?.error, navigate]);

  const name = getInfo.data?.artist?.name;
  const summary = getInfo.data?.artist?.bio?.content;
  const backText = 'Back to search';

  return (
    <div>
      <div className='artist-container'>
        <div className='back-button-item'>
          <Link to='/'>
            <button className='search-button'>{backText}</button>
          </Link>
        </div>
        <div className='name-item'>
          <p className='name'>{name}</p>
        </div>
        <div className='empty-item'></div>
        <div className='empty-item-last'></div>
      </div>
      <br />
      <p className='content'>{summary}</p>
    </div>
  );
};

export default ArtistInfoModel;
