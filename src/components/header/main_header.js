import React, {Component} from 'react';
import Navigation from './navigation';
import Search_bar from './search_bar';
import Avatar from './Avatar';
import bat_logo from '../../pics/bat.jpg'

const Main_header = () => {
    return(
        <header class="header">
           <img src={ bat_logo }  id="logo"  alt='bat_image'/>
           <Navigation />
           <Search_bar />
           <Avatar />
        </header>
    );
}

export default Main_header;