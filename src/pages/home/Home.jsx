import React from 'react';
import { Header, Brand, Development, Annotate, AnnotateAdv, Feedback, Manage } from './components/index';



const Home = () => {
    return(
        <div>
            <Header />
            <Brand />
            <Development />
            <Annotate />
            <AnnotateAdv />
            <Feedback />
            <Manage />
            <Brand />
        </div>
    );
}

export default Home;