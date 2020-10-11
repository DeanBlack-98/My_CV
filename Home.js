import React, {Component} from 'react'
import About from './About';
import Skills from './Skills';
import Experince from './Experience';
import Education from './Education';
import Navbar from './Navbar';
import Profile from './Profile';

export default class Home extends Component{
    render(){
        return(
            <section>
                <Navbar/>
                <div className = 'container'>
                    <div className = 'row'>
                        <div className = 'col s12 m4 l3'>
                            <Profile/>
                        </div>
                        <div className = 'col s12 m8 l9'>
                            <About/>
                            <Skills/>
                            <Experince/>
                            <Education/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}