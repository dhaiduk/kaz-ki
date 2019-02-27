import React from 'react';

import SearchForm from '../Home/SearchForm/SearchForm';
import ProductContainer from './ProductContainer';

import '../../css/Styles.css';

const SearchPage = () =>

    <div className='searchpage'>
        <SearchForm fire={false} />
        <br />
        <div>
            <audio ref="audio_tag" src="localhost:5000/api/tracks/5bfe5c749706492ac0ccb20a" controls autoPlay />
        </div>
        <ProductContainer />
    </div>

export default SearchPage;
