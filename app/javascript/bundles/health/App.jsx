import React, { useReducer, useEffect, useState } from 'react';
import NavBar from './NavBar';
import OverviewPage from './OverviewPage';
import dashboard from '../../../assets/images/dashboard_sample.png';
import SurveyPage from './SurveyPage';

const App = ({}) => {
  const [currentPage, setCurrentPage] = useState('Dashboard');

  useEffect(() => {
    console.log('currentPage', currentPage, window.location.search);
    setCurrentPage(window.location.search.replace('?page=', ''));
  }, [window.location.search]);

  return (
    <>
      <NavBar />
      {currentPage === 'dashboard' && <div className='w-100'><img src={dashboard} /></div>}
      {currentPage === 'overview' && <OverviewPage />}
      {currentPage === 'survey' && <SurveyPage />}
    </>
  );
}

export default App;