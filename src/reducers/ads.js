const adsReducer = (state, action) => {
    switch(action.type) {
      case 'getAds': 
        return { ads: action.payload, loading: false };
    }
}; 

export default adsReducer;