import axios from 'axios';

const url = 'http://localhost:5000/bugs';

export const fetchBugs = () => axios.get(url);

export const createBug = (newBug) => axios.post(url, newBug);

export const updateBug = (id, updatedBug) => axios.patch(`${url}/${id}`, updatedBug);

export const deleteBug = (id) => axios.delete(`${url}/${id}`);