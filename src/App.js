import React from 'react';
import photoFromSrc from './photoFromSrc.jpg';
import './App.css';
import './style.css';

function App() {
  return(
    <div className = 'divMain'>
	    <h1 className="title red">My title</h1>
      <br/>
      <img src={photoFromSrc} />
      <br/>
  	  <img src="/photoFromPublic.jpg" />
    </div>
  )
  
}

export default App;


