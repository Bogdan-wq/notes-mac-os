import React from "react";
import {connect} from 'react-redux';
import {changeSearchValue} from "../../actions";
import getNotes from "../../services/localstorage";

const SearchBox = ({searchValue,changeSearchValue}) => {

    return (
        <div className="form-group p-2 mb-0">
            <input type="text"
                   className="form-control"
                   placeholder="Search by topic..."
                   value={searchValue}
                   onChange={(e) => changeSearchValue(e.target.value,getNotes())}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        searchValue:state.searchValue
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeSearchValue:(value,notes) => {
            dispatch(changeSearchValue(value,notes))
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(SearchBox);
