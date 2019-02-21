import React, {Component } from 'react';

const Navigation = () => {
    const toggleNavShow  = () => {
        const nav_items = document.getElementById('nav-items');

        if(!nav_items.classList.contains('open')) {
            nav_items.classList.add('open');
        }
        else {
            nav_items.classList.remove('open');
        }
    }
    
    return (
        <nav class="main-nav">
            <ul id="nav-items">
                <li className="item menu">
                    <a href="#">Feed</a>
                    <ul class="sub-menu">
                        <li><a href="#">Test Test</a></li>
                        <li><a href="#">Test Test</a></li>
                        <li><a href="#">Test Test</a></li>
                        <li><a href="#">Test Test</a></li>
                    </ul>
                </li>
                <li className="item menu">
                    <a href="#">Library</a>
                    <ul class="sub-menu">
                        <li><a href="#">Test Test</a></li>
                        <li><a href="#">Test Test</a></li>
                        <li><a href="#">Test Test</a></li>
                        <li><a href="#">Test Test</a></li>
                    </ul>
                </li>
                <li className="item menu">
                    <a href="#">Suggest</a>
                    <ul class="sub-menu">
                        <li><a href="#">Test Test</a></li>
                        <li><a href="#">Test Test</a></li>
                        <li><a href="#">Test Test</a></li>
                        <li><a href="#">Test Test</a></li>
                        <li><a href="#">Test Test</a></li>
                        <li><a href="#">Test Test</a></li>
                        <li><a href="#">Test Test</a></li>
                    </ul>
                </li>
                <li className="item menu">
                    <a href="#">Stats</a>
                    <ul class="sub-menu">
                        <li><a href="#">Test Test Test Test</a></li>
                        <li><a href="#">Test Test Test Test</a></li>
                        <li><a href="#">Test Test Test Test</a></li>
                    </ul>
                </li>
                <li className="item menu">
                    <a href="#">Groups</a>
                    <ul class="sub-menu">
                        <li><a href="#">Group A</a></li>
                        <li><a href="#">Group B</a></li>
                        <li><a href="#">Group C</a></li>
                        <li><a href="#">Group D</a></li>
                        <li><a href="#">Group E</a></li>
                        <li><a href="#">Group F</a></li>
                        <li><a href="#">Group G</a></li>
                    </ul>
                </li>
                <li className="item menu"><a href="#">Data</a></li>
            </ul>
            <div id="hamburger" onClick={toggleNavShow}>
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
            </div>
        </nav>
    );
}

export default Navigation;