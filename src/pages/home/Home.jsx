import React from 'react';
import { Header, Brand, Development, Annotate, AnnotateAdv, Feedback, Manage, Automate, Cta} from './components/index';



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
            <Cta />
            <Brand />
        </div>
    );
}

export default Home;