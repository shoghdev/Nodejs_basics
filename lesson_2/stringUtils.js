function capitalize(str) {
    if (typeof str != "string") {
        throw new Error("Input must be a string")
    }
    let tmp = []
    let firstLetter = str[0].toUpperCase()
    let splited = str.split("")
    tmp.push(firstLetter)
    for (let i = 1; i < splited.length; i++) {
        tmp.push(splited[i])
    }
    return tmp.join("")
}

function truncate(str, len) {
    if (typeof str !== "string") {
        throw new Error("Input must be a string")
    } else if (typeof len !== "number") {
        throw new Error("The second argument must ba a number")
    }
    let tmp = str.slice(0, len)
    if (str.length <= len) {
        return tmp
    }
    return tmp + "..."
}

function reverse(str) {
    let tmp = []
    if (typeof str != "string") {
        throw new Error("Input must be a string")
    }
    let splited = str.split("")
    for (let i = splited.length; i >= 0; i--) {
        tmp.push(splited[i])
    }
    return tmp.join("")
}

module.exports = { capitalize, reverse, truncate }