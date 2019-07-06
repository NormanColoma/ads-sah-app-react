import adsReducer from './ads';

const initialState = {
    ads: [],
    loading: true,
    page: 0,
    sort: 'id',
    direction: 1
};

export { adsReducer, initialState };