import {appConstants} from "../constants/constant";

export const addName = (newName) => {
    // action object
    return {
        type: appConstants.ADD_NAME,
        payload: newName
    };
};
