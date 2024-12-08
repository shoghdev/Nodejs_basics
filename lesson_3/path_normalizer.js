const path = require("node:path")

class PathNormalizer {
    normalizePath(filePath) {
        return path.normalize(filePath)
    }
    joinPaths(...paths) {
        return path.join(...paths)
    }
}

const filePath = new PathNormalizer()
//console.log(filePath.normalizePath("./user/../user/documents//file.txt"))
//console.log(filePath.joinPaths( "/home", "user", "documents", "file.txt"))