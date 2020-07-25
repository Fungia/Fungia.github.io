import React, { Component } from 'react';
import './content.css'
import { Home } from './Pages/home';
import { AboutMe } from './Pages/AboutMe';
import { Skills } from './Pages/Skills';
import { Education } from './Pages/Education';
import { Experience } from './Pages/Experience';

function getComponent(name){
    switch(name){
        case "home":
            return <Home/>
        case "aboutMe":
            return <AboutMe/>
        case "skills":
            return <Skills/>
        case "education":
            return <Education/>
        case "experience":
            return <Experience/>
            
    }
}


export class Content extends Component{
    render(){
        return(
            getComponent(this.props.selected)
        )
    }
}