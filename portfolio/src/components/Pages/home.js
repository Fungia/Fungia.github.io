import React, { Component } from 'react';
import './home.css'
import droga from '../img/droga.jpg'

export class Home extends Component{
    render(){
        return(
            <article className="layoutHome" >
        

                {/* <div>
                    <img src={droga}></img>
                </div> */}
                <div className="quotation">
                Wykonuj trudne zadania, kiedy są jeszcze łatwe. Podejmuj wielkie wyzwania, kiedy są jeszcze małe. Podróż tysiąca mil musi zacząć się od jednego kroku. 
                </div>
                <div className="authorOfQuote">
                -Laozi
                </div>
                {/* <div className='img'>
                </div> */}
                
            </article>
        )
    }
}