import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class Navbar extends Component{
    render(){
        return(
            <div>
                <nav className = "red darken-4">
                    <div className = "container">
                        <div className = "nav-wrapper">
                            <NavLink to = "/" className = "brand-logo">
                                CV
                            </NavLink>
                            <NavLink to = "/" data-target = "side-nav" className = "sidenav-trigger">
                                <i className = "material-icons">menu</i>
                            </NavLink> 
                            <ul className = 'right hide-on-med-and-down'>
                                <li>
                                    <NavLink to = "/">
                                        <i className = "fas fa-home">Home</i>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to = "/Skills">
                                        <i className = "fas fa-copy">Skills</i>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to = '/About'>
                                        <i className = "fas fa-address-card">About</i>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to = "/Education">
                                        <i className = "fas fa-graduation-cap">Education</i>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to = "/Experience">
                                        <i className = "fas fa-clock">Experience</i>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <ul className = 'sidenav' id = 'side-nav'>
                                <li>
                                    <NavLink to = "/">
                                        <i className = "fas fa-home">Home</i>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to = "/Skills">
                                        <i className = "fas fa-copy">Skills</i>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to = "/About">
                                        <i className = "fas fa-address-card">About</i>
                                    </NavLink>
                                </li>                                
                                <li>
                                    <NavLink to = "/Education">
                                        <i className = "fas fa-graduation-cap">Education</i>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink exact to = "/Experience">
                                        <i className = "fas fa-clock">Experience</i>
                                    </NavLink>
                                </li>
                            </ul>
            </div>
        )
    }
}