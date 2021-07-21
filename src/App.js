import React from 'react';
import './App.css';
import Row from './Row';
import requests from './request';
import Banner from './Banner';

function App() {
    return (
        <div className="App">

            <Banner />

            <Row tittle="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} islargeRow />
            <Row tittle="Trending Now" fetchUrl={requests.fetchNetflixOriginals} />
            <Row tittle="Action Movies" fetchUrl={requests.fetchNetflixOriginals} />
            <Row tittle="Comedy Movies" fetchUrl={requests.fetchNetflixOriginals} />
            <Row tittle="Horror Movies" fetchUrl={requests.fetchNetflixOriginals} />
            <Row tittle="Romance Movies" fetchUrl={requests.fetchNetflixOriginals} />
            <Row tittle="Documentaries" fetchUrl={requests.fetchNetflixOriginals} />

        </div>
    );
}

export default App;
