import React, { Component } from 'react';


class Search_bar extends Component {

    constructor() {
        super();
        this.toggleShow = this.toggleShow.bind(this)
    }

    state = {
        inputShown: false,
    };

    toggleShow () {
        const {inputShown} = this.state;
        if(!inputShown) {
            this.setState({
                inputShown : true,
            })
        }
    }

    render() {
        console.log(this.state)
        return (
            <div className="search" onClick={this.toggleShow}>
                <i class="fa fa-search"></i>
                {this.state.inputShown ? <input type="text" id="input" class="animate" placeholder="Search" /> : ''}
                {/* <span>search</span>  */}
            </div>
        );
    }
}


export default Search_bar;