import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Author from '../author/author';
import AddAuthor from '../addAuthor/addAuthor';
import './content.css';

class Content extends Component {
    render() {
        console.log('render Content');
        console.log(this.props.authors);
        return(
           <div className="content">
                <AddAuthor/>
                {this.props.authors.map(function(item){
                    return <Author key={item.id} {...item} 
                                editAuthor={this.props.editAuthor} 
                                seeCourses={this.props.seeCourses}/>
                }, this)}
           </div>
        )
    }
}
Content.propTypes = {
    editAuthor: PropTypes.func,
    seeCourses: PropTypes.func,
}
export default Content;