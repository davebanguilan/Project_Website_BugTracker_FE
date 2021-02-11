import * as api from '../api';
import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes'

//Action Creators - Actions that returns an action, an action is just an object with type and payload

export const getBugs = () => async (dispatch) => {
    try {
        const {data} = await api.fetchBugs();

        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error.message);
    } 
}

export const createBug = (bug) => async (dispatch) => {
    try {
        console.log("1");
        console.log(bug);
        const { data } = await api.createBug(bug);
        console.log(data);
        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const updateBug = (id, bug) => async (dispatch) => {
    try {
        const {data} = await api.updateBug(id, bug);
        dispatch({type: UPDATE, payload: data});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteBug = (id) => async (dispatch) => {
    try {
        await api.deleteBug(id);
        dispatch({type: DELETE, payload: id });
    } catch (error) {
        console.log(error.message);
    }
}

