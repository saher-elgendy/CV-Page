import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main_header from './components/header/main_header'
import Navigation from './components/header/navigation';
import Search_bar from './components/header/search_bar';
import Avatar from './components/header/Avatar';
import bat_logo from './pics/bat.jpg';
import avatar_img from './pics/avatar.png';
import Content from './components/content/content';
import Footer from './components/footer/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header>
          <img src={ bat_logo }  id="logo"  alt='bat_image'/>
          <Navigation />
          <Search_bar />
          <Avatar img={avatar_img}/>
        </header> */}
        <Main_header />
        <Content image={avatar_img}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
