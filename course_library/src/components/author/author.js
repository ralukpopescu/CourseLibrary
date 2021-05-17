import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './author.css';

class Author extends PureComponent {
    render() {
        console.log('render Author', this.props.id);
        const id= this.props.id;
        return (
            <div className="content-author">
                <h1>Name: {this.props.name}</h1>
                <span>Age: {this.props.age}</span>
                {/* <img className="card-product-image" src={props.photoUrl} alt={props.name}/> */}
                <h5> Category: {this.props.category} </h5>
                <button className="btn" onClick={() =>this.props.editAuthor(id)}>Edit</button> 
                <button className="btn" onClick={() =>this.props.deleteAuthor(id)}>Delete</button> 
                <button className="btn" onClick={() =>this.props.seeCourses(id)}>See courses</button>
              </div>
        )
    }
}
Author.propTypes={
    editAuthor: PropTypes.func,
    seeCourses: PropTypes.func,
    deleteAuthor: PropTypes.func
}
export default Author;