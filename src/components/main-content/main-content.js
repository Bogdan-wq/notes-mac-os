import React from 'react'
import './main-content.scss';
import {connect} from 'react-redux';
import Panel from "../panel";
import Time from "../time-component";
import NotePage from "../note-page";
import {Route} from "react-router";
import {AddNoteFormModal, DeleteMenuModal} from "../hoc/layer";


const MainContent = ({addMenuOpened,deleteModalOpened}) => {


    const addMenuLayer = addMenuOpened ? <AddNoteFormModal /> : null

    const deleteModalLayer = deleteModalOpened ? <DeleteMenuModal /> : null


    return (
        <div className="d-flex justify-content-end">
            <div className="main-content">
                <Panel />
                <Route path="/"
                       component={Time}
                       exact/>
                <Route path="/:noteUrl"
                       render={({match}) => {
                           const {noteUrl} = match.params;
                           return <NotePage url={noteUrl}/>
                       }}/>
                {addMenuLayer}
                {deleteModalLayer}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        addMenuOpened: state.addMenu.opened,
        deleteModalOpened: state.deleteModal.opened,
    }
}

const mapDispatchToProps = {}


export default connect(mapStateToProps,mapDispatchToProps)(MainContent);