import './header.css';
import logo from '..//../logo.png';
import React, { Component } from 'react';

class Header extends Component
{
    render(){
        return (
            <header className="App-header">
                <table>
                    <tbody>
                        <tr>
                        <td>
                            <img src={logo}  className="App-logo" alt="logo" />
                        </td>
                        <td><p className="Paragraph-header"> The GitHub cards application </p></td>
                        </tr>
                    </tbody>
                </table>
            </header>
        );
    }
}

export default Header;