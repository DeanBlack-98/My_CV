import React, {Component} from 'react'

export default class Experience extends Component{
    render(){
        return(
            <div>
                <div className = "card">
                    <div className = "card-content">
                        <h6>
                            <strong>Experience</strong>
                        </h6>
                        <div className = "row">
                            <div className = "col s12 m4 l4 xl4">
                                <p className = "teal year-exp white-text">
                                    Dec
                                    <strong>2019</strong> - Jan 
                                    <strong>2020</strong>
                                </p>
                            </div>
                            <div className = "col s12 m8 l8 xl8">
                                <blockquote className = "no-pad">
                                    <h6 className = "no-pad mt-bottom">
                                        <strong>SELF EMPLOYED</strong>
                                    </h6>
                                    <p>
                                        Sold a few small programs for local farmers.
                                    </p>
                                </blockquote>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}