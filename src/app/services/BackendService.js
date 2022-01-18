import axios from 'axios';

// Add a request interceptor
axios.interceptors.request.use( config => {
  const user = JSON.parse(localStorage.getItem('user'));

  if(user && user.accessToken){
    const token = 'Bearer ' + user.accessToken;
    config.headers.Authorization =  token;
  }

  return config;
});

class BackendService {
  async getUserBoard() {
    return await axios.get("/api/auth/user");
  }

  async getPmBoard() {
    return await axios.get("/api/auth/pm");
  }

  async getAdminBoard() {
    return await axios.get("/api/auth/admin");
  }
}

export default new BackendService();