import axios from 'axios'

const BASE_URL = 'http://localhost:5000/api/'
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNjUxYzk4NjQ4ZGZjOTNiNGRlMWRlMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNDEwNzY2NSwiZXhwIjoxNjM0MzY2ODY1fQ.e1uY7H7Rvz-YiYTsM_ZoqJ4nifbmje6hBUpuQLZpHzY '

export const publicRequest = axios.create({
    baseURL: BASE_URL,
  });
  
  export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
  });