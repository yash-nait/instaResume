import axios from 'axios';

const api = axios.create({
    baseURL: 'https://insta-resume.herokuapp.com//api'
});

export const insertResume = payload => api.post("/resume", payload);
export const getResumeByCode = code => api.get(`/resume/${code}`);

const apis = {
    insertResume,
    getResumeByCode,
}

export default apis