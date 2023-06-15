export const ApiUrlHandler = (param) => {
  var ApiKey = process.env.REACT_APP_API_KEY;
  var getInfoUrl = `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${param}&api_key=${ApiKey}&format=json`;
  var getTopAlbumsUrl = `https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${param}&api_key=${ApiKey}&format=json`;
  return {
    getInfoUrl: getInfoUrl,
    getTopAlbumsUrl: getTopAlbumsUrl,
  };
};
