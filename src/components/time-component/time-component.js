import React from 'react'
import {connect} from 'react-redux'
import {timeChange} from "../../actions";
import './time-component.scss';

const Time = ({timeChange,date}) => {

    setTimeout(timeChange,1000)

    const { day, monthInfo: {month} , hours, minutes, year } = date;

    return (
        <span className="time d-flex justify-content-center">{`${day} ${month} ${year}, ${hours}:${minutes}`}</span>
    )
}

const mapStateToProps = (state) => {
    return {
        date:state.date,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        timeChange:() => {
            dispatch(timeChange())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Time)