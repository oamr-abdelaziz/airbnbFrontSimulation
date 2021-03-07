import axios from "axios";


export const citiesAxiosInstance = axios.create({
  baseURL: "https://wft-geo-db.p.rapidapi.com/v1/geo/locations",
  // headers: {
    
  // },
});

export const axiosInstance = axios.create({

  baseURL: "http://localhost:4000/",
  headers: {
    "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjA0MzYyZTU3YmQwNTIwYmNjMTU5ZTgzIn0sImlhdCI6MTYxNTA0MjAzMiwiZXhwIjoxNjE1MDQzMjMyfQ.3kYL2R5N_Y2_Uyx1qKqh01OJv2zdOWp7Po2U2MSzyRU",
  },
 
});

// Add a request interceptor
citiesAxiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    // show loader
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
citiesAxiosInstance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // hide loader
    // console.log(response)
    // response.data.push("test")
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });


  export const userAxiosInstance = axios.create({
  baseURL: "http://localhost:4000/users",

  headers: {
    "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjA0MjgwNTliMTBlOTcyYTYwYzQ5MmM4In0sImlhdCI6MTYxNDk4NTg0NywiZXhwIjoxNjE0OTg5NDQ3fQ.QkCBf5UY1Z8t5juIbSRohv8gUBVRc2ok8uSxe86L6hY"
  },
  
  params: {
  },
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {"token"
    // Do something before request is sent
    // show loader
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
axiosInstance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // hide loader
    // console.log(response)
    // response.data.push("test")
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });

userAxiosInstance.interceptors.request.use(
  function (config) {

    // Do something before request is sent
    // show loader
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
userAxiosInstance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // hide loader
    // console.log(response)
    // response.data.push("test")
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });

export const PlacesAxiosInstance = axios.create({
  baseURL:"http://localhost:4000/places",
  headers:{
    
  }
})