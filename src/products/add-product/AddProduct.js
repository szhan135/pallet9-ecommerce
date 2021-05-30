import React, {Component} from 'react';
import classes from './AddProduct.module.scss';
import AddIcon from '@material-ui/icons/Add';
import {appConstants} from "../../constants/constant";
import {TextField} from "@material-ui/core";
import {connect} from "react-redux";
import {addProduct} from "../../actions/products.action";

class AddProduct extends Component {

    constructor(props) {
        super(props);
        const state = {
            product: {},
            error: {},
            form: {
                valid: false,
                invalid: true
            }
        };

        appConstants.PRODUCT_FIELD.forEach(field => {
            state.product[field.name] = '';
            state.error[field.name] = null;
            state.form[field.name] = {
                touched: false,
                untouched: true,
                valid: false,
                invalid: true
            };
        });

        this.state = state;
    }

    handleBlur = (event) => {
        // event is SyntheticEvent
        const newForm = {
            ...this.state.form,
            touched: true,
            untouched: false

        };
        const target = event.target;
        const newError = {...this.state.error};
        newError[target.id] = target.value === '' ? `${target.name} is required!` : null;
        // investigate: will below approach overwrite other state properties
        this.setState({
            error: newError,
            form: newForm
        });
    };

    checkValid = () => {
        /*
        *  form {
        *      valid,
        *       name: {valid, invalid}
        * }
        *
        * */
        const isValid = Object.values(this.state.form).every(obj => {
            if (typeof obj === 'object') {
                return obj.valid;
            }
            return true;
        });
        const newForm = {...this.state.form, valid: isValid, invalid: !isValid};
        this.setState({
            form: newForm
        });
    };

    handleChange = (event) => {
        const target = event.target;
        const newError = {...this.state.error};
        const newProduct = {
            ...this.state.product,
            [target.id]: target.value
        };
        const newForm = {...this.state.form};
        newError[target.id] = target.value === '' ? `${target.name} is required!` : null;
        newForm[target.id].valid = !newError[target.id];
        newForm[target.id].invalid = !newForm[target.id].valid;

        this.setState({
            product: newProduct,
            error: newError,
            form: newForm
        });
        this.checkValid();
    };

    renderControl = (field) => (
        <TextField
            key={field.name}
            name={field.label}
            id={field.name}
            label={field.label}
            margin="normal"
            variant="outlined"
            type={field.type}
            value={this.state.product[field.name]}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            helperText={this.state.error[field.name]}
            error={!!this.state.error[field.name]}
        />
    );

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addProduct(this.state.product);
    };
    render() {
        return (
            <form className={classes.AddProduct} onSubmit={this.handleSubmit}>
                <h2 className={classes.header}>Add Product</h2>

                {
                    appConstants.PRODUCT_FIELD.map(field => this.renderControl(field))
                }

                <button type="submit" className={classes.addProductButton} disabled={this.state.form.invalid}>
                    <AddIcon className={classes.addProductIcon}/>
                    <span className={classes.addProductText}>Add Product</span>
                </button>
            </form>
        );
    }
}
export default connect(null, {addProduct})(AddProduct);
