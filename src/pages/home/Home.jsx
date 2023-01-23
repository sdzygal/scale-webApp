import React from 'react';
import { Header, Brand, Development, Annotate, AnnotateAdv, Feedback, Manage, Automate, Cta, Evaluate, Collect, Generate, Cta2, Cta3, Footer} from './components/index';
import { Copyright } from "../../components/footer/Footer";


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
            <Evaluate />
            <Collect />
            <Generate />
            <Cta2 />
            <Brand />
            <Cta3 />
            <Footer />
                <Copyright />
        </div>
    );
}

export default Home;