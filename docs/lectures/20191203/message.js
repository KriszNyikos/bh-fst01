let user = require("./user")

class Message {
    constructor(from, to, text) {
            this.from = from,
            this.to = to,
            this.text = text
    }

}

let messages = []

function add(from, to, msg) {
    if (user.expIsRegistered(from) && user.expIsRegistered(to) ) {
            messages.push(new Message(from, to, msg))
            console.log("A bevétel sikeres volt")
    } else { return false }
}

function getMessagesFrom(fromUser){
    let output = []
    for (let i = 0; i < messages.length; i++) {
            if (messages[i].from === fromUser) {
                output.push(messages[i].text)
            }
    }
    return output
}

function getMessagesTo(toUser){
    let output = []
    for (let i = 0; i < messages.length; i++) {
            if (messages[i].to === toUser) {
                output.push(messages[i].text)
            }
    }
    return output
}

module.exports = {
    expAdd : add,
    expGetMessagesFrom : getMessagesFrom,
    expGetMessagesTo : getMessagesTo
}