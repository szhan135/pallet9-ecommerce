import React from 'react';
import Header from "./header/Header";
import './App.scss';

/* Before React 16.8, class component is also called a container, smart component, it has state and can implement
*  life cycle hook methods.
*  After 16.8, class components are being replaced by functional components because the component creation process
*  of functional components are more efficient
* */
class App extends React.Component {
    /* Each class component will have a state object
    *  we can call setState to rerender the view
    * */
    state = {
        names: ['alice', 'bob', 'charlie']
    };
    products = [
        { name: 'iPhone', brand: 'Apple', price: 100, stock: 22, image: 'https://s3.us-east-2.amazonaws.com/msi-tech-2019/iphone.jpg' },
        { name: 'iPhone3G', brand: 'Apple', price: 200, stock: 33, image: 'https://s3.us-east-2.amazonaws.com/msi-tech-2019/iphone3G.jpg'},
        { name: 'iPhone3GS', brand: 'Apple', price: 300, stock: 11, image: 'https://s3.us-east-2.amazonaws.com/msi-tech-2019/iphone3GS.jpg'},
        { name: 'iPhone4', brand: 'Apple', price: 400, stock: 22, image: 'https://s3.us-east-2.amazonaws.com/msi-tech-2019/iphone4.jpg'},
        { name: 'iPhone4S', brand: 'Apple', price: 500, stock: 33, image: 'https://s3.us-east-2.amazonaws.com/msi-tech-2019/iphone4S.jpg'},
        { name: 'iPhone5', brand: 'Apple', price: 600, stock: 11, image: 'https://s3.us-east-2.amazonaws.com/msi-tech-2019/iphone5.jpeg'},
        { name: 'iPhone5C', brand: 'Apple', price: 700, stock: 222, image: 'https://s3.us-east-2.amazonaws.com/msi-tech-2019/iphone5c.png'},
        { name: 'iPhone5S', brand: 'Apple', price: 800, stock: 333, image: 'https://s3.us-east-2.amazonaws.com/msi-tech-2019/iphone5s.jpg'},
        { name: 'iPhone6', brand: 'Apple', price: 900, stock: 111, image: 'https://s3.us-east-2.amazonaws.com/msi-tech-2019/iphone6.jpg'}
    ];

    /* c -> p:
    *  In parent, create a function and pass the function reference to child through attribute
    * */
    addName = (newName) => {
        /*this.state.names.push(newName);*/
        // this.forceUpdate();
        const newNames = [...this.state.names];
        newNames.push(newName);
        this.setState({
            names: newNames
        });
    };

    render() {
        /* returned jsx follows below rules:
           1. one root element only
           2. if returned jsx is in multiple lines, use () to enclose it.
        */
        return (
            // syntax sugar for <React.Fragment>, create a temp wrapper
            // which will not be rendered in DOM. See <ng-container> in Angular
            <>
                <Header/>
                <main className="app-content">
                    {this.props.children}
                </main>
            </>
        );
    }
}
export default App;
