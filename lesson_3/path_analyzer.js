const path = require("node:path")

class PathAnalyzer {
    getBaseName(filePath) {
        return path.basename(filePath)
    }
    getDirName(filePath) {
        return path.dirname(filePath)
    }
    getExtension(filePath) {
        return path.extname(filePath)
    }
    isAbsolutePath(filePath) {
        return path.isAbsolute(filePath)
    }
}

const filePath = new PathAnalyzer()
//console.log(filePath.getBaseName("/home/user/documents/report.pdf"))
//console.log(filePath.getDirName("/home/user/documents/report.pdf"))
//console.log(filePath.getExtension("/home/user/documents/report.pdf"))
console.log(filePath.isAbsolutePath("/home/user/documents/report.pdf"))
