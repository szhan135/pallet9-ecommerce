import React, {Component} from 'react';
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {addName} from "../../actions/names.action";

class AddName extends Component {
    // newName = '';

    constructor(props) {
        super(props);
        this.state = {
            newName: ''
        };

    }

    updateName = (event) => {
        // this.newName = event.target.value;
        this.setState({
            newName: event.target.value
        });
        // setState here is asynchronous
        // console.log(this.state.newName);
    };

    addNameHandler = () => {
        this.props.addName(this.state.newName);
    };

    render() {
        return (
            <section className="AddName">
                <Input type="text" value={this.state.newName} onChange={this.updateName}/>
                {/*
                    c -> p:
                    In child, call the function passed down from parent and pass data through arguments
                */}
                <Button
                    variant="contained"
                    color="primary"
                    onClick={this.addNameHandler}
                >Add Name</Button>
            </section>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({addName}, dispatch);
}

export default connect(null, mapDispatchToProps)(AddName);
