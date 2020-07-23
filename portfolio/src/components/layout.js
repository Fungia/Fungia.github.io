import React, { Component } from 'react';
import './layout.css'
import { Navigator } from './navigator';
import { Home } from './home';
export class Layout extends Component{
    render(){
        return(
            <div className="layoutGrid">
                     <header className="layoutNavigator">
                         <Navigator></Navigator>
                     </header>
                     <main className="layoutContent">
                     <article className="layoutHome">
                     <Home></Home>
                     </article>
                       
                     </main>

            </div>
        )
    }
}