import React from 'react';
import PageTitle from '../../Shared/PageTItle/PageTitle';
import Banner from '../Banner/Banner';
import Dresses from '../Dresses/Dresses';

const HomePage = () => {
    return (
        <div>
           <PageTitle title='Home'></PageTitle>
            <Banner></Banner>
            <Dresses></Dresses>
        </div>
    );
};

export default HomePage;