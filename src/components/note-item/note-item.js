import React from 'react'
import './note-item.scss'

const NoteItem = ({note}) => {
    const {topicValue, noteValue, date,} = note;

    return (
        <div className="p-2 note-item pl-3">
            <h4 className="note-item__topic">{topicValue}</h4>
            <div className="d-flex justify-content-between align-items-center">
                <span className="note-item__date">{`${date.day}.${date.monthInfo.numberMonth}.${date.year}`}</span>
                <span className="small overflow-hidden note-item__text">{noteValue}</span>
            </div>

        </div>
    )
}

export default NoteItem;

