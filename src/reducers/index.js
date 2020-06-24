import getTime from "../services/time";
import getNotes from "../services/localstorage";


const initialState = {
    date:getTime(),
    notes:getNotes(),
    searchValue:'',
    addMenu:{
        opened:false,
        topicInputValue:'',
        noteInputValue:'',
    },

    deleteModal:{
        opened:false,
        itemWantedToDelete:null,
    },
}




const reducer = (state = initialState,action) => {
    switch (action.type) {
        case 'TIME_CHANGE':
            return {
                ...state,
                date:getTime(),
            }
        case 'ADD_MENU_OPENED':
            return {
                ...state,
                addMenu: {
                    ...state.addMenu,
                    opened:true,
                }
            }
        case 'ADD_MENU_CLOSED':
            return {
                ...state,
                addMenu: {
                    ...state.addMenu,
                    opened:false,
                }
            }
        case 'ADD_MENU_CHANGE_TOPIC':
            return  {
                ...state,
                addMenu: {
                    ...state.addMenu,
                    topicInputValue:action.payload,
                }
            }
        case 'ADD_MENU_CHANGE_TEXT_NOTE':
            return  {
                ...state,
                addMenu: {
                    ...state.addMenu,
                    noteInputValue:action.payload,
                }
            }
        case 'ADD_MENU_SUBMIT_NEW_NOTE':
            return {
                ...state,
                notes: [
                    action.payload,
                    ...state.notes,
                ]
            }
        case 'SEARCH_NOTES':
            const { valueInput, notes } = action.payload

            if(valueInput.length === 0) {
                return {
                    ...state,
                    notes,
                    searchValue: valueInput,
                }
            }

            return {
                ...state,
                searchValue: valueInput,
                notes: [
                    ...state.notes.filter((note) => note.topicValue.toLowerCase().indexOf(valueInput.toLowerCase()) > -1)
                ]
            }
        case 'DELETE_MODAL_OPENED':
            return {
                ...state,
                deleteModal: {
                    opened: true,
                }
            }
        case 'DELETE_MODAL_CLOSED':
            return {
                ...state,
                deleteModal: {
                    opened: false,
                    itemWantedToDelete: null,
                }
            }
        case 'DELETE_MODAL_ITEM_WANTED_TO_DELETE':

            const idx = state.notes.findIndex((noteItem) => noteItem.url === action.payload)

            return {
                ...state,
                deleteModal:{
                    ...state.deleteModal,
                    itemWantedToDelete:idx,
                },
            }
        case 'DELETE_MODAL_REMOVE_NOTE':
            return {
                ...state,
                notes:[
                    ...state.notes.slice(0,state.deleteModal.itemWantedToDelete),
                    ...state.notes.slice(state.deleteModal.itemWantedToDelete + 1),
                ],
            }
        default:
            return state;
    }

}


export default reducer;