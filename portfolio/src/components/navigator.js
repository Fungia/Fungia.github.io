import React, { Component } from 'react';
import './navigator.css'
import fotka from './img/fotka.jpg'
export class Navigator extends Component{
    render(){
        return(
            <nav className="navigatorNav">
                <section className="user">
                    <div><img className="foto" src={fotka} alt=":)"/></div>
                    <div><p>Imie Nazwisko</p></div>
                </section>
                <section className="information">
                    <div>GŁÓWNA</div>
                    <div>O MNIE</div>
                    <div>UMIEJĘTNOŚCI</div>
                    <div>EDUKACJA</div>
                    <div>DOŚWIADCZENIE</div>
                    <div>KONTAKT</div>
                </section>
                <footer className="footer">Copyright</footer>    
            </nav>
        )
    }
}