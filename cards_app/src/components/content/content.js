import './content.css';
import React, { Component } from 'react';
import Card from '../card/card';

class Content extends Component
{
    render(){
        console.log('Card', this.props);
        const list=this.props.cardList;
        return (
            <div>
                {list.map(item=><Card{...item}/>)}
                {/* <Card name={this.props.cardList[0].name}
                    title={this.props.cardList[0].title}
                    company={this.props.cardList[0].company}
                    image={this.props.cardList[0].image}/>
                <Card name={this.props.cardList[1].name}
                    title={this.props.cardList[1].title}
                    company={this.props.cardList[1].company}
                    image={this.props.cardList[1].image}/> */}
            </div>
        );
    }
}

Content.propTypes = {
    cardList:Array
}

export default Content;