import React, {Component} from 'react';
import Follower from './follower';

class Followers extends Component {
    state = {
        followers: [
            {
                name: 'Maxim Kotsemir',
                institution: 'Cambride University'
            }, 
            {
                name: 'Cristina E.Pencuic',
                institution: 'Elsevier BV'
            }, 
            {
                name: 'Peter Daroch',
                institution: 'Elsevier BV'
            }, 
            {
                name: 'Mark Wallberg',
                institution: 'Stanford University'
            }, 
            {
                name: 'Robert Downey',
                institution: 'Harvard University'
            }, 
            {
                name: 'Jodi Foster',
                institution: 'Yale University'
            }, 
            {
                name: 'Mohammed Dawe',
                institution: 'Tanta University'
            }, 
            {
                name: 'David Stellar',
                institution: 'Texas University'
            }, 
            {
                name: 'Dimas Xavier',
                institution: 'Liverpool University'
            }, 
            {
                name: 'James Carter',
                institution: 'Cambride University'
            }, 
            {
                name: 'Diana Hallman',
                institution: 'Munich University'
            }, 
        ]
    }

    render ( ) {
        const {followers} = this.state;
        return(
            <section id="followers" class="left_section">
                <h2>Followers ({followers.length})</h2>
                <ul id="followers-list">
                    {followers.map((follower, i) => 
                         <li >
                            <Follower  key={i}
                                image={this.props.image}
                                name={follower.name} 
                                institution={follower.institution}>
                            </Follower>
                         </li>
                    )}
                </ul>         
        </section>
        );
    }
}       


export default Followers;