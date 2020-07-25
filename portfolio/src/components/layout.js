import React, { Component } from 'react';
import './layout.css'
import { Navigator } from './navigator';
import { Content } from './Content';


export class Layout extends Component{

    constructor(){
        super()
        this.state = {choosed:"home"}
    }

    changeView(name){
        this.setState({choosed:name})
    }

    render(){
        return(
            <div className="layoutGrid">
                    <div className="layoutLeftSide"></div>
                     <header className="layoutNavigator">
                         <Navigator onNavClick={this.changeView.bind(this)}></Navigator>
                     </header>
                     <main className="layoutContent">
                        <Content selected={this.state.choosed}></Content>
                     </main>
                     <div className="layoutRightSide"></div>

            </div>
        )
    }
}