import axios from 'axios';

// const API = axios.create({ baseURL: "http://localhost:5000" });
const API = axios.create({
  baseURL: "https://project-bugtracker-backend.herokuapp.com/",
});

API.interceptors.request.use((req) => {
    if (localStorage.getItem("profile")) {
      req.headers.Authorization = `Bearer ${
        JSON.parse(localStorage.getItem("profile")).token
      }`;
    }
  
    return req;
});

export const fetchBugs = () => API.get('/bugs');

export const createBug = (newBug) => API.post('/bugs', newBug);

export const updateBug = (id, updatedBug) => API.patch(`/bugs/${id}`, updatedBug);

export const deleteBug = (id) => API.delete(`/bugs/${id}`);



//AUTH

export const signIn = (formData) => API.post('/users/signin', formData);
export const signUp = (formData) => API.post('/users/signup', formData);