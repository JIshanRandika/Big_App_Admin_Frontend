import axios from 'axios';
import authHeader from './auth-header';


const rooturl = process.env.REACT_APP_ROOT_URL || 'http://localhost:8080'

const API_URL = 'https://bigdealershipbackend.herokuapp.com/api/test/';

// const API_URL = 'https://bigdealershipbackend.herokuapp.com/api/test/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
}

export default new UserService();
