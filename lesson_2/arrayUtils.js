function unique(arr) {
    return [...new Set(arr)];
}

function flatten(arr) {
    let tmp = []
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            tmp = tmp.concat(flatten(arr[i]))
        } else {
            tmp.push(arr[i])
        }
    }
    return tmp
}

function chunk(arr, size) {
    let tmp = []
    for (let i = 0; i < arr.length; i += size) {
        tmp.push(arr.slice(i, i + size));
    }
    return tmp
}

module.exports = { unique, flatten, chunk }