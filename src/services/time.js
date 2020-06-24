const getTime = () => {
    const date = new Date();

    const year = date.getFullYear();

    const month = verbalMonth(date.getMonth() + 1);
    const numberMonth = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;

    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    const hours = date.getHours() + 1 < 10 ? `0${date.getHours()}` : date.getHours();
    const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();

    return {
        day,
        monthInfo:{
            month,
            numberMonth,
        },
        year,
        hours,
        minutes}

}


const verbalMonth = (month) => {
    switch (month) {
        case 1:
            return 'January';
        case 2 :
            return 'February';
        case 3:
            return 'March';
        case 4:
            return 'April';
        case 5:
            return 'May';
        case 6:
            return 'June';
        case 7:
            return 'July';
        case 8:
            return 'August';
        case 9:
            return 'September';
        case 10:
            return 'October';
        case 11:
            return 'November';
        case 12:
            return 'December';
    }
}


export default getTime;