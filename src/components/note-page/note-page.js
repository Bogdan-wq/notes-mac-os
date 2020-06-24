import React from 'react'
import getNotes from "../../services/localstorage";
import {itemWantedToDelete, openDeleteModal} from "../../actions";
import {connect} from 'react-redux';
import {withRouter} from "react-router";
import './note-page.scss'

const NotePage = ({url,itemWantedToDelete}) => {

    const {topicValue, noteValue} = getNotes().find((note) => note.url === url);

    return (
        <div className="pl-3 p-1">
            <div className="d-flex flex-column">
                <h4 className="mb-1 font-weight-bold">Topic</h4>
                <div className="values">{topicValue}</div>
            </div>
            <div className="d-flex flex-column mt-4">
                <h4 className="mb-1 font-weight-bold">Note</h4>
                <div className="values">{noteValue}</div>
            </div>
            <div className="d-flex mt-3 pr-3">
                <button type="button"
                        className="btn btn-lg btn-danger"
                        onClick={() => itemWantedToDelete(url)}>
                    Delete this note
                </button>
            </div>
        </div>

    )
}


const mapStateToProps = (state) => {
    return {}
}


const mapDispatchToProps = (dispatch) => {
    return {
        itemWantedToDelete:(url) => {
            dispatch(openDeleteModal())
            dispatch(itemWantedToDelete(url))
        }
    }
}




export default connect(mapStateToProps,mapDispatchToProps)(withRouter(NotePage));