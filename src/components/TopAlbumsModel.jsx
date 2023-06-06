import { useNavigate } from 'react-router-dom';
import { ApiUrlHandler } from '../util/ApiUrlHandler';
import useFetch from '../util/UseFetch';
import './styles/topAlbums.css';
import { useEffect } from 'react';

const TopAlbumsModel = ({ search }) => {
  const navigate = useNavigate();
  const getTopAlbumsUrl = ApiUrlHandler(search).getTopAlbumsUrl;
  const getTopAlbums = useFetch(getTopAlbumsUrl);

  useEffect(() => {
    if (getTopAlbums.data?.error) {
      return navigate('/error');
    }
  }, [getTopAlbums.data?.error, navigate]);

  const albums = [];

  for (let i = 0; i < 3; i++) {
    if (
      !getTopAlbums.data?.topalbums?.album[i]?.name
        .toLowerCase()
        .includes('null')
    ) {
      albums.push(getTopAlbums.data?.topalbums?.album[i]);
    }
  }

  const retrieveImageSrc = (album) => {
    return album?.image[2]['#text'];
  };

  const albumsHeader = 'Top albums';

  return (
    <div>
      <h3 className='heading'>{albumsHeader}</h3>
      <br />
      <div className='albumContainer'>
        {albums.map((album) => (
          <div key={album?.name}>
            <img src={retrieveImageSrc(album)} alt=''></img>
            <p className='albumName'>
              {' '}
              <a className='albumLink' href={album?.url}>
                {album?.name}
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopAlbumsModel;
