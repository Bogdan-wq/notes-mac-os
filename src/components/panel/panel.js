import React from 'react'
import { openAddMenu } from "../../actions";
import {connect} from 'react-redux';
import {Link} from "react-router-dom";

const Panel = ({openAddMenu}) => {
    return (
        <div className="d-flex justify-content-between align-items-center pl-3 p-1">
            <Link to="/">
                <h1 className="font-weight-light">Your notes</h1>
            </Link>
            <button
                type="button"
                className="btn btn-success btn-lg mr-2"
                onClick={openAddMenu}>
                New Note
            </button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        openAddMenu:() => {
            dispatch(openAddMenu())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Panel);