import React, { Component } from 'react';
import './navigator.css'
import fotka from './img/fotka.jpg'
export class Navigator extends Component{
    render(){
        return(
            <nav className="navigatorNav">
                <section className="user">
                    <div><img className="foto" src={fotka} alt=":)"/></div>
                    <div><p>Justyna Klimczak</p></div>
                </section>
                <section className="information">
                    <div onClick={()=>this.props.onNavClick("home")}>GŁÓWNA</div>
                    <div  onClick={()=>this.props.onNavClick("aboutMe")}>O MNIE</div>
                    <div onClick={()=>this.props.onNavClick("skills")}>UMIEJĘTNOŚCI</div>
                    <div onClick={()=>this.props.onNavClick("education")}>EDUKACJA</div>
                    <div onClick={()=>this.props.onNavClick("experience")}>DOŚWIADCZENIE</div>
                    <div>KONTAKT</div>
                </section>
                <footer className="footer">Copyright 2020</footer>    
            </nav>
        )
    }
}