'use strict'

const toDate = str => {
    const [year, month, day] = str.split('-').map(s => Number(s));
    return new Date(year, month - 1, day);
};

const diffFullYear = (date1, date2) => {
    let result = date1.getFullYear() - date2.getFullYear();
    if (date1.getMonth() < date2.getMonth()) result--;
    if ((date1.getMonth() === date2.getMonth()) && (date1.getDate() < date2.getDate())) result--;
    return result;
}

const checkBirthday = str => {
    const birthday = toDate(str);
    const now = new Date();
    if (diffFullYear(now, birthday) < 14) return false;
    return true;
}
