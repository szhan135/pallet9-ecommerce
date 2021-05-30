import React from 'react';
import Name from "./name/Name";
import './Names.scss';
import {connect} from "react-redux";

const Names = props => {
    return (
        // P => C:
        // in parent we pass data through attribute
        <div className="Names">
            {/*<Name name="alice"/>
            <Name name="bob">
                16
            </Name>*/}
            {
                props.names.map(n => (
                    <Name name={n} key={n}>
                        {
                            Math.floor(120 * Math.random())
                        }
                    </Name>
                ))
            }
        </div>
    );
};
function mapStateToProps(appState) {
    // returned object will be merged with component props
    return {
        names: appState.names
    };
}
export default connect(mapStateToProps)(Names);

