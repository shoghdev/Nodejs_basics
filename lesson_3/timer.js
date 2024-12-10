
const EventEmitter = require('node:events')

class Timer extends EventEmitter {
    #duration
    constructor(duration) {
        super()
        this.#duration = duration
    }
    start() {
        this.emit("timer-start", reminder)
        console.log("Timer started...")
        let reminder = this.#duration
        const startTime = Date.now()
        while (reminder > 0) {
            const currentTime = Date.now()
            const seconds = Math.floor((currentTime - startTime) / 1000)
            if (this.#duration - seconds < reminder) {
                reminder = this.#duration - seconds
                console.log(`Remaining: ${reminder} seconds`)
                
            }
            if (reminder <= 0) {
                console.log("Timer ended...")
                this.emit("timer-end")
                return
            }
        }
    }
}

module.exports = Timer


