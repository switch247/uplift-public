import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from "react-redux";
import store from "./store/ReduxStore"
import { MantineProvider } from '@mantine/core';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <MantineProvider>

      <React.StrictMode>
        <App />
      </React.StrictMode>
    </MantineProvider>
  </Provider>,
)



// import React from "react";
// import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { PersistGate } from "redux-persist/integration/react";
// import store from "./store/ReduxStore";
// import App from "./App";

// // stack overflow

// ReactDOM.render(
//   <Provider store={store}>
//     <BrowserRouter>
//       <Routes>
//         <Route path="*" element={<App />} />
//       </Routes>
//     </BrowserRouter>
//   </Provider>,
//   document.getElementById("root")
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
