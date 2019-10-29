import React from 'react';
import LatestMovies from '../../Containers/LatestMovies/LatestMovies';
import MainSideBar from '../../Containers/MainSideBar/MainSideBar';

const FirstPage = props => {
    return (
        <>
            
            <LatestMovies/>
            <MainSideBar/>
        </>
    );
}
export default FirstPage;