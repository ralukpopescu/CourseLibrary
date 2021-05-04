import './card.css';
import React from 'react';

function Card(props) {
    console.log('Card', props);
    return (
        <div className="card-github-profile">
            <table>
                <tr>
                    <td>
                        <img src = {props.image}/>
                    </td>
                    <td>
                        <div className ="info">
                            <div className="name">Name: {props.name}</div>
                            <div>Title: {props.title}</div>
                            <div>Company: {props.company}</div>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default Card;