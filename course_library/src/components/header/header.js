import React from 'react';
import './header.css';
import { PureComponent } from 'react';

class Header extends PureComponent {
    render(){
        console.log('render Header');
        return(
            <header className="App-header">
            <h4 className="logo-text">Course library</h4>
            </header>
        )
    }
}
export default Header;