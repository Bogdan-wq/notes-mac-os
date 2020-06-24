import React from "react";
import {
    changeNoteTextValueInput,
    changeTopicValueInput,
    closeAddMenu,
    closeDeleteModal,
    closeEditModal
} from "../../actions";
import {connect} from "react-redux";
import NoteForm from "../modals/add-note-form";
import DeleteModal from "../modals/delete-modal";
import './layer.scss'

const withLayer = (ModalContent,label,labelButton = '') => ({closeLayer}) => {

    return (
        <div className="layer position-fixed">
            <div className="w-100 h-100 position-relative d-flex justify-content-center align-items-center">
                <div className="background position-absolute" onClick={closeLayer}/>
                <div className="modal-dialog col-6">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{label}</h5>
                            <button type="button" className="close" onClick={closeLayer}>
                                <span>&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <ModalContent label={labelButton}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = () => {
    return {}
}

const mapDispatchToPropsNoteForm = (closeLayer) => (dispatch) => {
    return {
        closeLayer:() => {
            dispatch(closeLayer())
            dispatch(changeNoteTextValueInput(''))
            dispatch(changeTopicValueInput(''))
        }
    }
}


const mapDispatchToPropsDeleteModal = (dispatch) => {
    return {
        closeLayer:() => {
            dispatch(closeDeleteModal())
        }
    }
}


const AddNoteFormModal = connect(mapStateToProps,
                                 mapDispatchToPropsNoteForm(closeAddMenu))
                                (withLayer(NoteForm,'Add New Note','Create note'))

const DeleteMenuModal = connect(mapStateToProps,mapDispatchToPropsDeleteModal)
                               (withLayer(DeleteModal,'Delete note'))


export {
    AddNoteFormModal,
    DeleteMenuModal,
}