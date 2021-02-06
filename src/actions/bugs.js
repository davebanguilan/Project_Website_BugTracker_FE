import * as api from '../api';

//Action Creators - Actions that returns an action, an action is just an object with type and payload

export const getBugs = () => async (dispatch) => {
    try {
        const {data} = await api.fetchBugs();

        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message);
    } 
}

export const createBug = (bug) => async (dispatch) => {
    try {
        const { data } = await api.createBug(bug);
        dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}