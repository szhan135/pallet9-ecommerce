import {combineReducers} from "redux";
import {namesReducer} from "./names.reducer";
import {productsReducer} from "./products.reducer";
import {authReducer} from "./auth.reducer";

export const rootReducer = combineReducers({
    names: namesReducer,
    products: productsReducer,
    user: authReducer
});
