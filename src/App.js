import React from 'react';
import './App.css';
import Row from './Row';
import requests from './request';
import Banner from './Banner';
import Navbar from './Navbar';

function App() {
    return (
        <div className="App">

            <Navbar />

            <Banner />

            <Row tittle="FunFlix ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} islargeRow />
            <Row tittle="Trending Now" fetchUrl={requests.fetchTrending} />
            <Row tittle="Top Rated Movies" fetchUrl={requests.fetchTopRated} />
            <Row tittle="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row tittle="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
            <Row tittle="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Row tittle="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
            <Row tittle="Documentaries" fetchUrl={requests.fetchDocumenntaries} />

        </div>
    );
}

export default App;
