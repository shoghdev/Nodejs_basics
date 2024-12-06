function isWeekend(date) {
    if(!(date instanceof Date)) {
        throw new Error("Date must be a date")
    }
    const day = date.getDate()
    return day === 0 || day === 6
}


function daysBetween(date1, date2) {
    if(!(date1 instanceof Date) && !(date2 instanceof Date)) {
        throw new Error("Dates must be a date")
    }
    const diff = Math.abs(date1 - date2);
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

function formatDate(date, format) {
    if(!(date instanceof Date)) {
        throw new Error("Date must be a date")
    }

    if(typeof format !== "string") {
        throw new Error("Fromat must be a string")
    }

    const year = date.getFullYear()
    const month = String(date.getDate()).padStart(2,"0")
    const day = String(date.getDate()).padStart(2,"0")
    const hours = String(date.getHours()).padStart(2,"0")
    const minutes = String(date.getMinutes()).padStart(2,"0")
    const seconds = String(date.getSeconds()).padStart(2,"0")

    return format
        .replace("YYYY", year)
        .replace("MM", month)
        .replace("DD", day)
        .replace("HH", hours)
        .replace("mm", minutes)
        .replace("ss", seconds)
}

module.exports = { formatDate, isWeekend, daysBetween }