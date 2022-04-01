export const formatedDate = (date) => {

    if (date < 10) {
        return `0${date}`;
    } else {
        return date;
    }

}