import React from 'react';
import './Name.scss';

/* Before React 16.8, a functional component is also called presentational component or dumb component. It doesn't
*  have state and cannot access life cycle hook methods.
*
*  After 16.8, react hooks are introduced, a new way to write react applications. It allows functional component to
*  use state and lc hook methods. React official teams recommend developers to use functional components over
*  class components
* */

const Name = (props) => {
    // props is readonly
    // props.name = 'jack';
    // p -> c
    // in child, we receive data through props
    // props.children is similar to ng-content in angular
    return <p className="Name">{props.name} age is {props.children}</p>;
};

export default Name;
