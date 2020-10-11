import React, {Component} from 'react';
import ImgProfile from '../Images/Me.jpeg';

export default class Profile extends Component{
    render(){
        return(
            <div>
                <div className = "card">
                    <div className = "card-image">
                        <img className = "activator" src = {ImgProfile} alt = "Deon Swart"></img>
                        <i className = "fas">Deon Swart</i>
                    </div>
                    <p className = "fas">
                        It Student
                    </p>
                </div>
            </div>
        )
    }
}