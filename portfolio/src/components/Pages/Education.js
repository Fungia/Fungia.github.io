import React, { Component } from 'react';
import './Education.css'

export class Education extends Component{
    render(){
        return(
            <article className="layoutEducation">
                <div className="educationTitle">
                    EDUKACJA
                    </div>
                    <div className="educationText">
                    <h3>  
                    Uniwersytet Humanistyczno-Przyrodniczy im. Jana Długosza w Częstochowie
                    </h3>   
                    <p>
                    Tytuł: Magister
                    </p>
                    <p>
                    Kierunek studiów: Grafika
                    </p>
                    <p>
                    Okres studiów: 2017 – 2019
                    </p>
                    <p>
                    Specjalizacja: Projektowanie graficzne
                    </p>
                    <h3>  
                    Akademia im. Jana Długosza w Częstochowie
                    </h3>   
                    <p>
                    Tytuł: Licencjat
                    </p>
                    <p>
                    Kierunek studiów: Grafika
                    </p>
                    <p>
                    Okres studiów: 2014 – 2017
                    </p>
                    <p>
                    Specjalizacja: Projektowanie graficzne
                    </p>

                    </div>
            </article>
        )
    }
}