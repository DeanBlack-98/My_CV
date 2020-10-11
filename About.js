import React, {Component} from 'react'

export default class About extends Component{
    render(){
        return(
            <div>
                <div className = "card">
                    <div className = "card-content">
                        <h6 className = "mt-bottom">
                            <strong>ABOUT ME</strong>
                        </h6>
                        <p className ="grey-text">
                            I'm a 22 year old IT student at North-West Univercity in South-Africa. I am a person who greatly enjoys 
                            learning new things and expanding my knowledge. I am also a hard working individual and do great in group
                            projects. My goal in life is to be successful in the IT world.
                        </p>
                    </div>
                    <div className = "card-action">
                        <h6><strong>PERSONAL INFO</strong></h6>
                        <div className = "row mt">
                            <div className = "col s12 m6 l6 xl6">
                                <p><strong>Address: </strong>4G Hatting Street, Nort-West</p>
                                <p><strong>Contact Number: </strong>081 409 4850</p>
                                <p><strong>Email: </strong>dswart54@yahoo.com</p>
                            </div>
                            <div className = "s12 m6 l6 xl6">
                                <p><strong>Main Language: </strong>Afrikaans</p>
                                <p><strong>Second Language: </strong>English</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}