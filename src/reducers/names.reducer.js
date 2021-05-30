import {appConstants} from "../constants/constant";

const names = ['alice', 'bob', 'charlie'];

export const namesReducer = (state = names, action) => {
    if (action.type === appConstants.ADD_NAME) {
        return [...state, action.payload];
    }
    return state;
}
