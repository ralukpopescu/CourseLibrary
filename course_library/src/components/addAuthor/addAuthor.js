import { Component } from 'react';
import './addAuthor.css';
import {connect} from 'react-redux';
import * as authorActions from '../../redux/actions/authorActions';
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux';

class AddAuthor extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            firstName:"",
            lastName:"",
            category:""
        }
    }

    handleChange=(event)=>{
        const authorConst={...this.state.author, [event.target.id]: event.target.value}
        this.setState({author:authorConst});
        console.log("HandleChange id="+ event.target.id +" value=" +event.target.value);
    }

    handleSubmit=(event)=>{
        debugger;
        event.preventDefault();
        console.log("HandleSubmit save author: "+ this.state.author);
        //this.props.dispatch(authorActions.createAuthor(this.state.author));
        this.props.actions.saveAuthor(this.state.author);
        this.props.history.push('/');
    }

    handleCancel=()=>{
        this.props.history.push('/');
    }

    render() {
        console.log('render addAuthor');
        return (
            <form className="addAuthor" onSubmit={this.handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td><h1>New author</h1></td>
                        </tr>
                        <tr>
                            <td>
                                <span>First name:</span>
                                <input id="firstName" type="text" className="inputText" onChange={this.handleChange} value={this.state.firstName.value}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span>Last name:</span>
                                <input id="lastName" type="text" className="inputText" onChange={this.handleChange} value={this.state.lastName.value}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span>Category:</span>
                                <input id="category" type="text" className="inputText" onChange={this.handleChange} value={this.state.category.value}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button className="btn" onClick = {this.handleSubmit}>Save</button> 
                                <button className="btn" onClick = {this.handleCancel}>Cancel</button> 
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        )
    }
}

AddAuthor.propTypes ={
    //createAuthor: PropTypes.func.isRequired
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps)
{
    console.log("Map state to props" + state.authors);
    return {
        authors:state.authors
    }
}

function mapDispatchToProps(dispatch)
{
    return{
        //createAuthor: author => dispatch(authorActions.createAuthor(author))
        //using bindActionCreators is more simpler
        actions: bindActionCreators(authorActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddAuthor);