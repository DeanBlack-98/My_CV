import React, {Component} from 'react'

export default class Education extends Component{
    render(){
        return(
            <div>
                <div className = "card">
                    <div className = "card-content">
                        <h6>
                            <strong>Education</strong>
                        </h6>
                        <div className = "row">
                            <div className = "col s12 m4 l4 xl4">
                                <p className = "teal year-exp white-text">
                                    <strong>2016</strong>
                                </p>
                            </div>
                            <div className = "col s12 m8 l8 xl8">
                                <blockquote className = "no-pad">
                                    <h6 className = "no-pad mt-bottom">
                                        <strong>Matric Certificate</strong>
                                    </h6>
                                    <p>
                                        Afr 70%,
                                        Eng 75%,
                                        Math 72%,
                                        Science 65%,
                                        Accounting 80%,
                                        Life Orientation 82%,
                                        Engeneur Graphic Design 78%
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