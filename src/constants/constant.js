export const appConstants = {
    // routes
    namesRoute: '/names',
    addNameRoute: '/add-name',
    productsRoute: '/products',
    addProductRoute: '/add-product',
    editProductRoute: '/edit-product',
    loginRoute: '/login',

    // actions
    ADD_NAME: 'ADD_NAME',
    GET_PRODUCTS: 'GET_PRODUCTS',
    ADD_PRODUCT: 'ADD_PRODUCT',
    LOGIN: 'LOGIN',
    CHECK_LOGIN: 'CHECK_LOGIN',

    // product fields
    PRODUCT_FIELD: [
        {
            name: 'name',
            label: 'Name',
            type: 'text'
        },
        {
            name: 'brand',
            label: 'Brand',
            type: 'text'
        },
        {
            name: 'image',
            label: 'Image',
            type: 'text'
        },
        {
            name: 'price',
            label: 'Price',
            type: 'number'
        },
        {
            name: 'stock',
            label: 'Stock',
            type: 'number'
        }
    ]
};
