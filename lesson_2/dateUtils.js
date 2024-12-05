function isWeekend(date) {
    const day = date.getDay();
    return day === 0 || day === 6; // Sunday or Saturday
}


function daysBetween(date1, date2) {
    const diff = Math.abs(date1 - date2);
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

function formatDate(date, format) {
    if(typeof date != "string") {
        throw new Error("Date must be a string")
    }

    return 
}

module.exports = { formatDate, isWeekend, daysBetween }