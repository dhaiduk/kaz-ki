import React from 'react';
import SearchForm from './SearchForm/SearchForm';

import img from './frontPage.png';

import '../../css/Home.css';

const Home = () =>
    <div className="home-box">
        <img src={img} alt="logo" className="home-logo" />
        <audio controls>
            <source src="/api/tracks/5bfe5c749706492ac0ccb20a" type="audio/mpeg"></source>
            <source src="/api/tracks/5bfe5cb59706492ac0ccb23b" type="audio/mpeg"></source>
        </audio>
        <SearchForm fire={true} />
    </div>;


export default Home;
