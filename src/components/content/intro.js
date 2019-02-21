import React, {Component} from 'react';


const Intro = (props) => {
    return (
        <section id="main_info" class="section">
            <div id="info_wrapper">
                <div id="hero_img">
                    <img src={props.image} alt="hero_image"/>
                </div>
                <div id="hero_info">    
                    <h2>David Neal</h2> 
                    <div id="hero_info_inner">
                        <p>Professor</p>
                        <p>Senior Group Leader and professor of surgical Oncology</p>
                        <p> Cambridge University</p>
                    </div>
                    <div id="contact">
                        <a href="#" class="follow_btn">
                            <span>Follow</span>
                        </a>
                        <div id="email">
                            <a href="#" id="message">Message</a>
                            <a><i class="fa fa-envelope"></i></a>
                        </div>
                    </div> 
                </div>    
            </div>
           
            <div id="statics">
                <div class="row">
                    <div class="number">
                        <span>500</span>
                        <span>Publications</span>
                    </div>
                    <div class="number">
                        <span>12880</span>
                        <span>Readers</span>
                    </div>
                </div>
                <div class="row">
                    <div class="number">
                        <span>72</span>
                        <span>h-index</span>
                    </div>
                    <div class="number">
                        <span>181150</span>
                        <span>Citations</span>
                    </div>
                    <div class="number">
                        <span>79427</span>
                        <span>Views</span>
                    </div>
                </div>
            </div>  

        </section>
    );
}

export default Intro;