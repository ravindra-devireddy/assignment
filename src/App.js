import React from 'react';
import './App.css';
import ItemsDisplay from './items/itemsDisplay'
import MiddleComponent from './middleCompoenent/middleComponent'
import TopComponent from './topComponent/topComponent'

function App() {
  return (
        <div className='app'>
          <TopComponent/>
          <MiddleComponent className='Middle-Component'/>
          <ItemsDisplay/>
            
        </div>
  );
}

export default App;
