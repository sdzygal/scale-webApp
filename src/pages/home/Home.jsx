import React from 'react';
import { Header, Brand, Development, Annotate, AnnotateAdv } from './components/index';





const Home = () => {
    return(
        <div>
            <Header />
            <Brand />
            <Development />
            <Annotate />
            <AnnotateAdv />

            <Brand />
        </div>
    );
}

export default Home;