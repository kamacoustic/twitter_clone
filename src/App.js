import React from 'react'
import Sidebar from './components/Sidebar';
import Feed from './components/Feed'
import Widgets from './components/Widgets'
import './App.css';


function App() {
  return (
    //BEM
    <div className="App">

    
    <Sidebar />

    <Feed />

    <Widgets />

      
    </div>
  );
}

export default App;
