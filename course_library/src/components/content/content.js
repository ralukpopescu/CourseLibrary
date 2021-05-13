import './content.css';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import Author from '../author/author';

import * as authorActions from '../../redux/actions/authorActions';
import * as courseActions from '../../redux/actions/courseActions';

class Content extends Component {

    seeCourses = (authorId) =>{
        debugger;
        console.log("Loading courses for authorId="+ authorId);
        this.props.actions.getCoursesForAuthor(authorId).catch(error=>{
            alert("Loaded authors failed"+ error);
        })
        //this.props.history.push("/course-list/"+ authorId);
    }

    addAuthor=()=>{
        console.log("Add author clicked");
        this.props.history.push("/add-author");
    }

    componentDidMount()
    {
        console.log("Loading authors:");
        this.props.actions.getAuthors().catch (error=>{
            alert("Loaded authors failed"+ error);
        })
    }

    render() {
        console.log('render Content');
        console.log(this.props.authors);
        return(
           <div className="content">
                <table>
                    <tr>
                        <td><h1>Authors</h1></td>
                        <td><button className="btn" onClick={this.addAuthor}>New author</button> </td>
                    </tr>
                        {this.props.authors.map(function(item){
                        return <Author key={item.id} {...item} 
                                    editAuthor={this.editAuthor} 
                                    seeCourses={this.seeCourses}/>
                    }, this)}
                </table>
           </div>
        )
    }
}

function mapStateToProps(state, ownProps)
{
    console.log("Map state to props authors:" + state.authors);
    console.log("Map state to props courses:" + state.courses);
    return {
        authors: state.authors,
        courses: state.courses
    }
}

function mapDispatchToProps(dispatch)
{
    return{
        //createAuthor: author => dispatch(authorActions.createAuthor(author))
        //using bindActionCreators is more simpler
        actions: {
            getAuthors: bindActionCreators(authorActions.getAuthors, dispatch),
            getCoursesForAuthor: bindActionCreators(courseActions.getCoursesForAuthor, dispatch)
        }
    };
}

Content.propTypes = {
    actions: PropTypes.object.isRequired
}
export default connect (
    mapStateToProps,
    mapDispatchToProps
)(Content);