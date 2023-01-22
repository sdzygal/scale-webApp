import React from 'react';
import { Header, Brand, Development, Annotate, AnnotateAdv, Feedback, Manage, Automate } from './components/index';



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
            <Automate />
            <Brand />
        </div>
    );
}

export default Home;