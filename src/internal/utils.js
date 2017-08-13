const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


export function getDaysinMonth (month, year) {
    if (month === 1 && (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0))){
        return 29;
    }

    return DAYS_IN_MONTH[month];
}