/* **** Timer **** */
// const Timer = require("./timer")
// const timer = new Timer(5)
// timer.start()
// timer.emit("timer-start")
// timer.emit("timer-end")

/* **** UserActionTracker **** */
const UserActionTracker = require('./user_action_tracker')
const tracker = new UserActionTracker()
tracker.on('actionLogged', (action) => {
    console.log(`Action logged: ${action}`);
})
tracker.on('maxActions', (count) => {
    console.log(`Maximum actions limit exceeded! Total actions: ${count}`);
})
tracker.logAction('login')
tracker.logAction('viewProfile')
tracker.logAction('logout')
tracker.logAction('login')
tracker.logAction('updateProfile')
tracker.logAction('logout')

