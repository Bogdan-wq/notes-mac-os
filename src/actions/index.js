const timeChange = () => {
    return {
        type:'TIME_CHANGE'
    }
}

const openAddMenu = () => {
    return {
        type:'ADD_MENU_OPENED'
    }
}

const closeAddMenu = () => {
    return {
        type:'ADD_MENU_CLOSED'
    }
}


const changeTopicValueInput = (valueInput) => {
    return {
        type:'ADD_MENU_CHANGE_TOPIC',
        payload:valueInput,
    }
}

const changeNoteTextValueInput = (valueInput) => {
    return {
        type:'ADD_MENU_CHANGE_TEXT_NOTE',
        payload:valueInput,
    }
}

const submitNewNote = (newNote) => {
    return {
        type:'ADD_MENU_SUBMIT_NEW_NOTE',
        payload:newNote,
    }
}


const changeSearchValue = (valueInput,notes) => {
    return {
        type:'SEARCH_NOTES',
        payload:{
            notes,
            valueInput,
        }
    }
}

const openDeleteModal = () => {
    return {
        type:'DELETE_MODAL_OPENED',
    }
}

const closeDeleteModal = () => {
    return {
        type:'DELETE_MODAL_CLOSED',
    }
}

const itemWantedToDelete = (index) => {
    return {
        type:'DELETE_MODAL_ITEM_WANTED_TO_DELETE',
        payload:index,
    }
}


const deleteNote = (index) => {
    return {
        type:'DELETE_MODAL_REMOVE_NOTE',
        payload:index,
    }
}

const openEditModal = () => {
    return {
        type:'EDIT_MODAL_OPENED'
    }
}

const closeEditModal = () => {
    return {
        type:'EDIT_MODAL_CLOSED'
    }
}



export { timeChange,
         openAddMenu,
         closeAddMenu,
         changeTopicValueInput,
         changeNoteTextValueInput,
         submitNewNote,
         changeSearchValue,
         openDeleteModal,
         closeDeleteModal,
         deleteNote,
         itemWantedToDelete,
         openEditModal,
         closeEditModal,
}