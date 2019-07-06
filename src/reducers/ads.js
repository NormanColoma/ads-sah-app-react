const adsReducer = (state, action) => {
    switch(action.type) {
      case 'getAds': {
        const { payload: newAds } = action;
        const { ads: currentAds } = state;

        const currentAdsIds = currentAds.map(it => it.id);
        const notExistingAds = newAds.filter(it => !currentAdsIds.includes(it.id));
        return { ...state, ads: [...state.ads, ...notExistingAds], loading: false };
      }
      case 'getAdsSorted': {
        return { ...state, ads: action.payload };
      }
      case 'incrementPage': 
        return Object.assign({}, state, { page: state.page+1 });
      case 'sortSelected': 
        return Object.assign({}, state, { sort: action.payload });
    }
}; 

export default adsReducer;