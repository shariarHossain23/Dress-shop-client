import React from 'react';
import PageTitle from '../../Shared/PageTItle/PageTitle';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Dresses from '../Dresses/Dresses';
import DressShop from '../DressShop/DressShop';

const HomePage = () => {
    return (
        <div>
           <PageTitle title='Home'></PageTitle>
              <Banner></Banner>
               <Dresses></Dresses> 
             <Contact></Contact>
             <DressShop></DressShop>
        </div>
    );
};

export default HomePage;