import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import {appConstants} from "./constants/constant";
import Names from "./names/Names";
import AddName from "./names/add-name/AddName";
import Products from "./products/Products";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./reducers/root.reducer";
import reduxPromise from 'redux-promise';
import AddProduct from "./products/add-product/AddProduct";
import EditProduct from "./products/edit-product/EditProduct";
import Login from "./auth/Login";
import {authGuard} from "./auth/authGuard";

const root = document.querySelector('#root');

const names = ['alice', 'bob', 'charlie'];

const addName = (newName) => {
    names.push(newName);
};

const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(rootReducer)}>
        <BrowserRouter>
            <App>
                <Switch>
                    <Route path={appConstants.namesRoute}>
                        <Names/>
                    </Route>
                    {/*<Route path={appConstants.addNameRoute} component={() => <AddName addName={addName}/>}/>*/}
                    <Route path={appConstants.addNameRoute} component={AddName}/>
                    <Route path={appConstants.productsRoute} component={Products}/>
                    <Route path={appConstants.addProductRoute} component={authGuard(AddProduct)}/>
                    <Route path={appConstants.loginRoute} component={Login}/>
                    <Route path={`${appConstants.editProductRoute}/:id`} component={EditProduct}/>
                </Switch>
            </App>
        </BrowserRouter>
    </Provider>,
    root
);


// h2 hello world
// const text = document.createTextNode('Hello World');
// const h2 = document.createElement('h2');
// h2.appendChild(text);
// root.appendChild(h2);
//
// const h2React = React.createElement('h2', null, 'Hello React');
// ReactDOM.render(h2React, root);
//
// // JSX: JavaScript XML (allows us to write HTML like syntax in js)
// // const myStyle = {color: 'red'};
// const name = 'alice';
// const h2ReactEle = <h2 style={ {color: 'red'} }>Hello React Again! {name}</h2>;
// ReactDOM.render(h2ReactEle, root);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
