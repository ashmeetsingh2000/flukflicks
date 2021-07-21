import React from 'react';
import './App.css';
import Row from './Row';
import requests from './request';

function App() {
    return (
        <div className="App">
            
            <Row tittle="NETFLIX ORIGINALS" fetchUrl = { requests.fetchNetflixOriginals }/>
            
        </div>
    );
}

export default App;
