import React, { useReducer, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { adsReducer, initialState } from './reducers';
import { getAdsFilter } from './actions';
import Ads from './components/ads/ads';

const App = () => {
  const [state, dispatch] = useReducer(adsReducer, initialState);
  const { ads, loading } = state;
  
  useEffect(() => {
    getAdsFilter('getAds', dispatch, { page: 0, sortedBy: 'id', direction: 1 });
  }, [ads.length, loading]);

  return(
    <Router>
      <div className="App">
        <header className="App-header">
          <p>
            Welcome to <code>Spotahome</code>!!
          </p>
        </header>
        <Switch>
          <Redirect exact from="/" to="/ads"></Redirect>
          <Route path="/ads" render={(props) => <Ads {...props} ads={ads} loading={loading}></Ads>} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
