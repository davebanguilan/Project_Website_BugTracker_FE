import axios from 'axios';

const url = 'http://localhost:5000/bugs';

export const fetchBugs = () => axios.get(url);

export const createBug = (newBug) => axios.post(url, newBug);