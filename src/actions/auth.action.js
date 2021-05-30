import {appConstants} from "../constants/constant";

export const login = (user, success, failure) => {
    const userFormData = new FormData();
    userFormData.append('username', user.username);
    userFormData.append('password', user.password);

    // ES6 fetch api: async, await, fetch
    const loginPromise = fetch(
        `${process.env.REACT_APP_API_URL}/login`,
        {
            method: 'POST',
            body: userFormData,
            credentials: 'include'
        }
    ).then(res => res.json());

    loginPromise.then(res => {
        res.success ? success(res.message) : failure(res.message);
    });
    return {
        type: appConstants.LOGIN,
        payload: loginPromise
    };
};
