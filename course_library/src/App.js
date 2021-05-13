import './App.css';
import React, { Component } from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Content from './components/content/content';
import AddAuthor from './components/addAuthor/addAuthor';
import CourseList from './components/course/courseList';
import { Route, Switch } from "react-router-dom";

class App extends Component
{
  constructor(props){
    super(props);
    this.state = {
      appAuthor:'Raluca Popescu'
    };
  }

  render()
  {
    return (
      <div className="App">
          <Header/>
          {/* <Content/> */}
          <Switch>
            <Route exact path="/" component={Content}/>
            <Route path="/add-author" component={AddAuthor}/>
            {/* <Route path="/course-list/:authorId" component={CourseList}/> */}
          </Switch>
          <Footer appAuthor ={this.state.appAuthor}/>
      </div>
    );
  }
}

export default App;
