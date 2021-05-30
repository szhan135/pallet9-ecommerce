import React from 'react';
import {Grid} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import './Products.scss';
import {connect} from "react-redux";
import {getProducts} from "../actions/products.action";
import {Link} from "react-router-dom";
import {appConstants} from "../constants/constant";

class Products extends React.Component {

    componentDidMount() {
        // if no products then send req
        !this.props.products && this.props.getProducts();
    }

    render() {
        return (
            <Grid container spacing={3} className="Products">
                {
                    this.props.products?.map(p => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={p.id}>
                            <Link to={`${appConstants.editProductRoute}/${p.id}`}>
                                <Paper className="product-wrapper">
                                    <img src={p.image} alt={p.name} className="product-image"/>
                                    <div className="product-overlay"/>
                                    <div className="product-info">
                                        <h3 style={{margin: 0}}>{p.name}</h3>
                                        <div>{p.brand}</div>
                                        <div>${p.price}</div>
                                    </div>
                                </Paper>
                            </Link>
                        </Grid>
                    ))
                }
            </Grid>
        );
    }
}

function mapStateToProps({products}) {
    return {products};
}

export default connect(mapStateToProps, {getProducts})(Products);
