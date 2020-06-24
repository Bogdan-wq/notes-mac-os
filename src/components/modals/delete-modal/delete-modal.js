import React,{Fragment} from 'react'
import {connect} from 'react-redux';
import {closeDeleteModal, deleteNote} from "../../../actions";
import getNotes from "../../../services/localstorage";
import {withRouter} from "react-router";

const DeleteModal = ({index,deleteNote,closeDeleteModal,history}) => {

    const removeNote = () => {
        deleteNote(index)
        history.push('/')
    }


    return (
        <Fragment>
            <p>Are you sure you want delete this note?</p>
            <div className="d-flex justify-content-end">
                <button type="button" className="btn btn-success mr-2" onClick={removeNote}>Yes</button>
                <button type="button" className="btn btn-danger" onClick={closeDeleteModal}>No</button>
            </div>
        </Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        index:state.deleteModal.itemWantedToDelete
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteNote:(index) => {
            dispatch(deleteNote(index))
            dispatch(closeDeleteModal())
            const newNotes = getNotes().slice(0,index)
                .concat(getNotes().slice(index + 1))
            localStorage.setItem('notes', JSON.stringify(newNotes))
        },
        closeDeleteModal:() => {
            dispatch(closeDeleteModal())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(DeleteModal));