import './App.css';
import React, { Component } from 'react';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Content from './components/content/content';

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
    super(props);
  }
    
  //both the props and the state are managed on an instance of the class
  render()
  {
    return (
      <div className="App">
          <Header/>
          <Content cardList={data}/>
          <Footer/>
      </div>
    );
  }
}

export default App;
