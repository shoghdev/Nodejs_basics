const EventEmitter = require('node:events')
class UserActionTracker extends EventEmitter{
    #action = []
    logAction(action) {
        let actionList = this.#action
        this.#action.push(action) 
        this.emit('actionLogged', action)
        if(this.#action.length >= 5){
            this.emit('maxActions', this.getActionCount())
        }
    }
    getActionCount(){
        return this.#action.length
    }
}

module.exports = UserActionTracker