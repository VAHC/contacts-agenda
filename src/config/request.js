import axios from 'axios';

axios.defaults.baseURL = `http://localhost:4040/api`;

// axios.interceptors.request.use(config => {
//   config.headers = {
//     Authorization: 'alsdkjfasdf.lakjdflkjdfsas.jasdflksdfjalsdfk',
//     ContentType: 'application/x-www-form-urlencoded'
//   };
//
//   return config;
// });
//
// axios.interceptors.response.use(response => {
//   if (response.status === 555) {
//     //Hacer algo
//     Promise.reject(response);
//   }
//   return response;
// });
