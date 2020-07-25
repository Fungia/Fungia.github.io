import React, { Component } from 'react';
import './home.css'
import droga from '../img/droga.png'

export class Home extends Component{
    render(){
        return(
            <article className="layoutHome" >
                <div className="content">
                    <div className="quotation">
                    Wykonuj trudne zadania, kiedy są jeszcze łatwe. Podejmuj wielkie wyzwania, kiedy są jeszcze małe. Podróż tysiąca mil musi zacząć się od jednego kroku. 
                    </div>

                    <div className="authorOfQuote">
                    -Laozi
                    </div>
                </div>
                <div className='img'>
                    <img src={droga}></img>
                </div>
                {/* <div className='img'>
                </div> */}
                
            </article>
        )
    }
}