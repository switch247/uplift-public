import React from 'react'
import Nav from './Nav';
import Header from './Header';
import Explore from './Explore';
import Class from './Class';
import Join from './Join';
import Price from './Price';
import Review from './Review';
import Footer from './Footer';

import  './land.css';

function Land() {
    return (
        <div  className='w-full'>
            <Nav />
            <Header />
            <Explore />
            {/* <Class /> */}
            <Join />
            {/* <Price /> */}
            <Review />
            <Footer />
        </div>
    )
}

export default Land