import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000/api'
});

export const insertResume = payload => api.post("/resume", payload);
export const getResumeByCode = code => api.get(`/resume/${code}`);

const apis = {
    insertResume,
    getResumeByCode,
}

export default apis