import './App.css';
import React, { Component } from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Content from './components/content/content';

const data = [
{
  id:1,
  name:"Seabury Toxic Reyson",
  age: 52,
  mainCategory: "Maps"
},
{
  id:2,
  name:"Atherton Crow Ridley",
  age: 36,
  mainCategory: "Rum"
},
{
  id:3,
  name:"Collen Hoover",
  age: 41,
  mainCategory: "Novels"
},
{
  id:4,
  name:"Nickolas Sparks",
  age: 55,
  mainCategory: "Novels"
},
{
  id:5,
  name:"Nancy Swashbuckler Rye",
  age: 70,
  mainCategory: "Rum"
},
{
  id:6,
  name:"Mircea Cartarescu",
  age: 64,
  mainCategory: "Poetry"
},
{
  id:6,
  name:"Mircea Cartarescu",
  age: 64,
  mainCategory: "Poetry"
},
{
  id:6,
  name:"Vasile Alecsandri",
  mainCategory: "Poetry"
},
]

class App extends Component
{
  constructor(props){
    super(props);
    this.state = {
      authors: [],
      appAuthor:'Raluca Popescu'
    };
  }

  componentDidMount = () => {
    //const response = await fetch('/products');
    //const data = await response.json();
    this.setState({
      authors: data
    });
  }
  componentDidUpdate(){
    //console.log("EditMode="+ this.state.setEditMode)
  }
    
  editAuthor = (id)=>{
    console.log("Edit author with id=" +id);
  }

  seeCourses = (id)=>{
    console.log("See courses for author with id=" +id);
  }

  render()
  {
    return (
      <div className="App">
          <Header/>
          <Content authors={this.state.authors}
                   editAuthor={this.editAuthor}
                   seeCourses={this.seeCourses}/>
          <Footer appAuthor ={this.state.appAuthor}/>
      </div>
    );
  }
}

export default App;
