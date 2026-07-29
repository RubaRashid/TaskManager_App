// import { useState } from 'react'
// import Home from "./pages/Admin/Dashboard";
// import './App.css'
// import Dashboard from './pages/Admin/Dashboard';

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         background:
//           "linear-gradient(to right, #f8fafc, #eef2ff)",
//       }}
//     >
//       <Dashboard />
//     </div>
//   )
// }

// export default App




import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "../src/context/UserContext"
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    // <BrowserRouter>

    //   <ToastContainer />

    //   <AppRoutes />

    // </BrowserRouter>


    <React.StrictMode>

      <UserProvider>

        <BrowserRouter>

          <App />

        </BrowserRouter>

      </UserProvider>

    </React.StrictMode>
  );
}

export default App;



