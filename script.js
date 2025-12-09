function validateUser(username, cb) {
    setTimeout(() => {
        if (username === "") cb("Invalid user", null)
        else {
            cb(null, "User validated")
        }
    }, 1000);
}

function loadUserProfile(username, cb) {
    setTimeout(() => {
        if(username === "") cb("Invalid user", null)
        else cb(null,"Profile loaded")
    }, 1000);
}

function sendWelcome(username, cb) {
    setTimeout(() => {
        if(username === "") cb("Invalid user", null)
        else cb(null,`Welcome ${username}`)
    }, 1000);
}


validateUser("Kim ji-won", function (err, result) {
    if (err) console.error(err)
    else {
        console.log(result)
        loadUserProfile("Kim ji-won", function (err, profile) {
            if (err) console.log(err)
            else {
                console.log(profile);
                sendWelcome("Kim ji-won", function (err, welcome) {
                    if(err) console.error(err);
                    else console.log(welcome)
                })
            }

        })
    }
})