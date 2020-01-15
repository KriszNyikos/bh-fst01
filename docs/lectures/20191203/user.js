let users = ["habiszti"]

function  isRegistered(username){
    for (let i = 0; i < users.length; i++) {
        if (users[i] === username) {
            return true
        }
    } return false
}

function register(username){
    if (isRegistered(username)) {
        return false
    }
    users.push(username)
    return true
}

function getUsers(){
    console.log("*************************************")
    console.log("Felhasználók listája:")
    for (let i = 0; i < users.length; i++) {
        console.log(users[i])
    }
    console.log("*************************************")
}

module.exports = {
    expIsRegistered : isRegistered,
    expRegister : register,
    expGetUsers : getUsers
}