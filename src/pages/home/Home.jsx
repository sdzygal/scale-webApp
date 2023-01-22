import React from 'react';
import { Header, Brand, Development, Annotate, AnnotateAdv, Feedback } from './components/index';



const Home = () => {
    return(
        <div>
            <Header />
            <Brand />
            <Development />
            <Annotate />
            <AnnotateAdv />
            <Feedback />

            <Brand />
        </div>
    );
}

export default Home;