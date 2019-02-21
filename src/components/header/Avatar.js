import React, {Component} from 'react';
import avatar_img from '../../pics/avatar.png';

const Avatar = () => {
    
    return (
        <div id="avatar">
            <span>Me</span>
            <a href="#"><img src={avatar_img}></img></a>
            <a href="#">
                <i class="fa fa-angle-down"></i>
            </a>
            <div id="notification_num">
                <a href="#">3</a>
            </div>
        </div>
    );
}

export default Avatar;