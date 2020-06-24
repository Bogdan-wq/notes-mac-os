const getNotes = () => {
    return localStorage.getItem('notes') == null ? [] : JSON.parse(localStorage.getItem('notes'));
}

export default getNotes;