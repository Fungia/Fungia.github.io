import React, { Component } from 'react';
import './Skills.css'
import web from '../img/webdeveloper.png'
import ux from '../img/uxuideigner.png'
import graphic from '../img/graphicdesigner.png'
export class Skills extends Component{
    render(){
        return(
            <article className="layoutSkills">
                <div className="skillsTitle">
                    UMIEJĘTNOŚCI
                </div>
                <div className="skillsText">
                    <div>
                    <img src={web}></img>

                    </div>
                    <div>
                    <img src={ux}></img>

                    </div>
                    <div>
                    <img src={graphic}></img>

                    </div>
                </div>
            </article>
        )
    }
}