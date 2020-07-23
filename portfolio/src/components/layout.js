import React, { Component } from 'react';
import './layout.css'
import { Navigator } from './navigator';

export class Layout extends Component{
    render(){
        return(
            <div className="layoutGrid">
                     <header className="layoutNavigator">
                         <Navigator></Navigator>
                     </header>
                     <main className="layoutContent">
                       
                     </main>

            </div>
        )
    }
}