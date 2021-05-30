import {appConstants} from "../constants/constant";
import axios from 'axios';

export const getProducts = () => {
    const getProductsPromise = axios.get(`${process.env.REACT_APP_API_URL}/products`);
    return {
        type: appConstants.GET_PRODUCTS,
        payload: getProductsPromise
    };
};

export const addProduct = (newProduct) => {
    const addProductPromise = axios.post(
        `${process.env.REACT_APP_API_URL}/products`,
        newProduct
    );
    return {
        type: appConstants.ADD_PRODUCT,
        payload: addProductPromise
    };
};
