import React from "react";
import PropTypes from "prop-types";

const CourseList = ({courses}) => (
    <table className="table">
        <tr>
            <h1>{this.props.authorName + " courses"}</h1>
        </tr>
        <thead>
        <tr>
            <th />
            <th>Title</th>
            <th>Description</th>
        </tr>
        </thead>
        <tbody>
        {courses.map(course => {
            return (
            <tr key={course.id}>
                <td>
                <a className="btn btn-light"
                    href={"http://pluralsight.com/courses/"}>
                    Watch
                </a>
                </td>
                <td>{course.title}</td>
                <td>{course.description}</td>
            </tr>
            );
        })}
        </tbody>
    </table>
);

CourseList.propTypes = {
  courses: PropTypes.array,
  authorName: PropTypes.string
};

export default CourseList;