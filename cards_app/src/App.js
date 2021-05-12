import './App.css';
import React, { Component } from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Content from './components/content/content';
import AddCard from './components/addCard/addCard';

const data = [
{
  name:"Kevin Clark",
  title: "programmer",
  image:"https://avatars.githubusercontent.com/u/20?v=4",
  company: "Cue"
},
{
  name:"Mark Jombo",
  title: "programmer",
  image:"https://avatars.githubusercontent.com/u/1?v=4",
  company: "Cue"
},
{
  name:"Eric Vay",
  title: "consultatnt",
  image:"https://avatars.githubusercontent.com/u/6?v=4",
  company: "Facebook"
},
{
  name:"Vladimir Anpelt",
  title: "QA engineer",
  image:"https://avatars.githubusercontent.com/u/17?v=4",
  company: "Facebook"
},
{
  name:"Roland Nimi ",
  title: "programmer",
  image:"https://avatars.githubusercontent.com/u/28?v=4",
  company: "Facebook"
}
]

class App extends Component
{
  constructor(props){
    super(props);//to honor the link between the App class and the class that it extends from React.Component
    //here we have access to the special state object that React manages for each class component
    this.state = {
      cardList: data,
    };
    //state is an object on the instance and "cardList" is a property of the state object
  }
    
  addNewCard = (cardData) =>{
    console.log('App:', cardData);
    this.setState(prevState =>(
      {
        cardList: [...prevState.cardList, cardData] //concatenation
      }
    ));
  }

  //both the props and the state are managed on an instance of the class
  render()
  {
    return (
      <div className="App">
          <Header/>
          <AddCard onSubmit={this.addNewCard}/>
          <Content cardList={this.state.cardList}/>
          <Footer/>
      </div>
    );
  }
}

export default App;
