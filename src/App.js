import React from 'react';
import './App.css';
import Navbar from './components/navBar';
import Left from './components/left';
function App() {
  return (
    <div className="App">
    <Navbar />
  
    <main>
    <Left />
    </main>
    </div>
  );
}

export default App;
