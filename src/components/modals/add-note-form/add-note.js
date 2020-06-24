import React from 'react'
import {connect} from 'react-redux'
import {changeTopicValueInput,changeNoteTextValueInput,submitNewNote,closeAddMenu} from "../../../actions";
import getTime from "../../../services/time";
import getNotes from "../../../services/localstorage";
import './add-note.scss'
import {withRouter} from "react-router";

const NoteForm = (props) => {

    const {
        changeTopicValueInput,
        changeNoteTextValueInput,
        topicInputValue,
        noteInputValue,
        submitNewNoteHandler,
        history,
        label,
    } = props;

    const submitNewNote = (e) => {
        e.preventDefault();
        const hash = Math.random().toString(32).substr(2,10)
        submitNewNoteHandler(e,topicInputValue, noteInputValue,hash)
        history.push(`/${hash}`)
    }

    return (
        <form onSubmit={(e) => submitNewNote(e)}>
            <div className="form-group">
                <label htmlFor="topic">Your topic:</label>
                <input type="text"
                       className="form-control"
                       placeholder="Enter topic"
                       required
                       id="topic"
                       onChange={(e) => changeTopicValueInput(e.target.value)}
                       value={topicInputValue}/>
            </div>
            <div className="form-group">
                <label htmlFor="text">Note text:</label>
                <textarea className="textarea form-control"
                          rows="5"
                          id="text"
                          value={noteInputValue}
                          onChange={(e) => changeNoteTextValueInput(e.target.value)}
                          required
                          placeholder="Enter some text"></textarea>
            </div>
            <div className="d-flex justify-content-end">
                <input type="submit"
                       className="btn btn-primary"
                       value={label}/>
            </div>
        </form>
    )
}

const mapStateToProps = (state) => {
    const {topicInputValue,noteInputValue} = state.addMenu;
    return {topicInputValue, noteInputValue}
}

const mapDispatchToProps = (dispatch) => {

    return {
        changeTopicValueInput:(value) => {
            dispatch(changeTopicValueInput(value))
        },
        changeNoteTextValueInput:(value) => {
            dispatch(changeNoteTextValueInput(value))
        },
        submitNewNoteHandler:(e,topicInputValue,noteInputValue,hash) => {
            const newNote = {
                date: getTime(),
                topicValue:topicInputValue,
                noteValue:noteInputValue,
                url:hash
            }

            dispatch(submitNewNote(newNote));
            localStorage.setItem('notes',JSON.stringify([newNote,...getNotes()]))
            dispatch(closeAddMenu());
            dispatch(changeTopicValueInput(''));
            dispatch(changeNoteTextValueInput(''));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(NoteForm));