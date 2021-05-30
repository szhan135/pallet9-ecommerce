import {appConstants} from "../constants/constant";

export const productsReducer = (state = null, action) => {
    switch (action.type) {
        case appConstants.GET_PRODUCTS:
            return action.payload.data;
        case appConstants.ADD_PRODUCT:
            return action.payload.data.success ? null : state;
        default:
            return state;
    }
};
