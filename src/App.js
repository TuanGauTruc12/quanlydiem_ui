import React from "react";
import { ToastContainer } from "react-toastify";
import {MyScore, Login } from "./containers/public";
import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "react-spinner-animated/dist/index.css";
import "./index.css";
import "./App.css";
import { Public } from "./components";
import { path } from "./ultis/path";

const App = () => {
  return (
    <>
      <Routes>
        <Route path={path.PUBLIC} element={<Public />}>
          <Route path={path.MY_SCOREBOARD} element={<MyScore />} />
          <Route path={path.LOGIN} element={<Login />} />
        </Route>
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default App;