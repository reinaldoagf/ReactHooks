import React from 'react';
import logo from './logo.svg';
import Header from './components/Header'
import './App.css';
import Characters from './components/Characters';

function App() {
  return (
    <div className="App">
      <div className="flex items-center bg-indigo-100 w-screen min-h-screen" >
        <div className="container ml-auto mr-auto flex flex-wrap items-start">
          <div className="w-full pl-5 lg:pl-2 mb-4 mt-4">
            <Header/>
          </div>
          <Characters/>
        </div>
      </div>
    </div>
  );
}

export default App;
