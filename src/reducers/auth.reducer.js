import {appConstants} from "../constants/constant";

export const authReducer = (state = null, action) => {
    switch (action.type) {
        case appConstants.LOGIN:
            return action.payload.success ? action.payload.user : state;
        case appConstants.CHECK_LOGIN:
            return action.payload.data.success ? action.payload.data.user : null;
        default:
            return state;
    }
};
