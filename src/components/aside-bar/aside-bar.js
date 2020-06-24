import React from 'react'
import {connect} from 'react-redux';
import './aside-bar.scss';
import NoteItem from "../note-item";
import {Link} from "react-router-dom";
import SearchBox from "../search-box";


const AsideBar = ({notes}) => {

    return (
        <div className="aside-bar position-fixed border-right overflow-hidden">
            <SearchBox />
            {
                notes.map((note) => {
                   return (
                       <Link to={`/${note.url}`} key={note.url}>
                           <NoteItem note={note}/>
                       </Link>
                   )
                })
            }
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        notes:state.notes,
    }
}

const mapDispatchToProps = {}


export default connect(mapStateToProps,mapDispatchToProps)(AsideBar);