import React, { useReducer, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { adsReducer, initialState } from './reducers';
import { getAdsFilter, downloadAds } from './actions';
import Ads from './components/ads/ads';
import AdSort from './components/ad-sort/ad-sort';
import AdDownloadBtn from './components/ad-download-btn/ad-download-btn';

const App = () => {
  const [state, dispatch] = useReducer(adsReducer, initialState);
  const { ads, loading, page, sort } = state;
  
  useEffect(() => {
    getAdsFilter('getAds', dispatch, { page: 0, sortedBy: sort, direction: 1 });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [page, sort]);

  const handleScroll = (event) => {
    const endOfAdsReached = window.innerHeight + window.scrollY >= document.body.offsetHeight;
    if (endOfAdsReached) {
      getAdsFilter('getAds', dispatch, { page: page+1, sortedBy: sort, direction: 1 });
    }
  };

  const handleSortOptionClick = (sortOption) => { 
    dispatch({ type: 'sortSelected', payload: sortOption });
    getAdsFilter('getAdsSorted', dispatch, { page: page, sortedBy: sortOption, direction: 1 });
   }

   const handleDownloadAdBtnClick = () => {
    const requestedPage = page > 0 ? page : 1;
    downloadAds({ untilPage: requestedPage, sortedBy: sort, direction: 1 });
   }

  const sortOpts = ['id', 'title', 'link', 'city', 'image']
  return(
    <Router>
      <div className="App"> 
        <header className="App-header">
          <p>
            Welcome to <code>Spotahome</code>!!
          </p>
        </header>
        <AdDownloadBtn handleDownloadAdBtnClick={handleDownloadAdBtnClick} />
        <AdSort sortOpts={sortOpts} sortSelected={sort} handleSortOptClick={handleSortOptionClick}/>
        <Switch>
          <Redirect exact from="/" to="/ads"></Redirect>
          <Route path="/ads" render={(props) => <Ads {...props} ads={ads} loading={loading}></Ads>} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
