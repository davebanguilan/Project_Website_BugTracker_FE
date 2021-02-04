import * as api from '../api';

//Action Creators - Actions that returns an action, an action is just an object with type and payload

export const getBugs = () => async (dispatch) => {
    try {
        const {data} = await api.fetchBugs();

        dispatch({ type: 'FETCH_ALL', payload: [] });
    } catch (error) {
        console.log(error.message);
    } 
}