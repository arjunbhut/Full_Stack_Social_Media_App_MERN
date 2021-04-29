import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000'})

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
})

export const fetchPosts = () => API.get('/'); 
export const createPost = (newPost) => API.post('/create', newPost );
export const updatePost = (id, updatedPost) => axios.patch(`/${id}`,updatedPost);
export const deletePost = (id) => API.delete(`/${id}`);
export const likePost = (id) => API.patch(`/${id}/likePost`);

export const signIn = (formData) => API.post('/users/signin', formData);
export const signUp = (formData) => API.post('/users/signup', formData);