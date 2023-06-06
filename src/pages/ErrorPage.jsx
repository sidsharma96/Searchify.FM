import React from 'react';
import './styles/errorPage.css';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  const backText = 'Back to search';
  const errorText =
    'We encountered an error. \n Please search again or search for a different term.';

  return (
    <div id='main-container'>
      <div className='back-container'>
        <div className='button-item'>
          <Link to='/'>
            <button>{backText}</button>
          </Link>
        </div>
        <div className='empty-item'></div>
        <div className='empty-item'></div>
        <div className='empty-item-last'></div>
      </div>
      <p className='error-message'>{errorText} </p>;
    </div>
  );
};

export default ErrorPage;
