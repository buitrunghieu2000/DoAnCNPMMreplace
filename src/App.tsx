import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Router from "./route";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import SocketService from "./socket/baseSocket";
import "react-toastify/dist/ReactToastify.css";
import io from "socket.io-client";

function App() {
  const token = localStorage.getItem("token");
  const urlSocket = `https://befreshfood.tk?fcm=123&token=Bearer ${token}`;
  const connectSocket = async () => {
    // (window as any).global = window;
    const socket = io(urlSocket);
    console.log(socket);

    // const socket = await SocketService.connect(urlSocket).catch((err) => {
    //   console.log("Error: ", err);
    // });
  };

  useEffect(() => {
    connectSocket();
  }, []);
  return (
    <div>
      <Router></Router>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
