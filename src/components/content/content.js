import React, {Component} from 'react';
import Intro from './intro';
import About from './about';
import Research_interests from './research_interests';
import Followers from './followers';

import Publications from './publications';

const Content = (props) => {
    return (
        <main role="main" class="hero">
            <Intro image={props.image} /> 
            <Research_interests />
            <About />
            <Followers image={props.image} />
            <Publications />   
        </main>
    );
}

export default Content;
