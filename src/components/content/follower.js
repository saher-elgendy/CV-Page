import React, {Component} from 'react';


const Follower = (props) => {
    return (
        <div class="follower">
            <div id="follower-details">
                <div id="follower-img">
                    <img src={props.image} alt="demo_image"/>       
                </div>
               
                <div id="follower-identity">
                    <a href="#">{props.name}</a>
                    <a href="#">{props.institution}</a>
                </div>
            </div>
            
            <div id="follow-btn">    
                <a href="#/" >
                    <span>Follow</span>
                    <i class="fa fa-plus"></i>
                </a>
            </div>
        </div>
    );
}

export default Follower;