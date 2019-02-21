import React, {Component} from 'react';

const About = () => {
    return (
        <section id="about" class="right_section">
            <h2>About</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum. 
            </p>
          
            <div id="view-more">
                <a href="#"><i class=" fa fa-angle-down"></i></a>
                <a href="#">View More</a>
            </div>
           
        </section>
    );
}

export default About;