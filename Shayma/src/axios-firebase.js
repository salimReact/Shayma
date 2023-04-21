import axios from 'axios';

const databaseURL = 'https://your-firebase-app.firebaseio.com/';

const instance = axios.create({
  baseURL: databaseURL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default instance;