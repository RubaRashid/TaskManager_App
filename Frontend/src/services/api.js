// import axios from "axios";

// const API = "http://localhost:5000/api/tasks";

// export const getTasks = () => axios.get(API);
// export const createTask = (data) => axios.post(API, data);
// export const updateTask = (id, data) => axios.put(`${API}/${id}`, data);
// export const deleteTask = (id) => axios.delete(`${API}/${id}`);


import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

api.interceptors.request.use((config) => {

  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization =
      `Bearer ${token}`;
  }

  return config;
});


export default api;



// import axios from "axios";

// const api = axios.create({
//   baseURL: "http://localhost:5000/api",
// });

// api.interceptors.request.use((config) => {

//   const token = localStorage.getItem("token");

//   if (token) {
//     config.headers.Authorization =
//       `Bearer ${token}`;
//   }

//   return config;
// });

// export default api;