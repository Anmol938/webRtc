import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import  socketIO  from 'socket.io-client';

const WS = "http://localhost:8080";

function App() {
  useEffect(() => {
    socketIO(WS);
  },[]);

  return (
    <div className="App flex items-center justify-center w-screen h-screen">
        <button className="bg-slate-500 py-2 px-8 rounded-lg text-xl hover:bg-slate-600 text-white">Start new meeting</button>
          </div>
  );
}

export default App;
