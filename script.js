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


// STEP 1 → validateUser(username, callback)

// Runs after 1 second

// If username is empty ("")

// callback with error: "Invalid username"

// Else

// callback with no error and message: "User validated"

// STEP 2 → loadUserProfile(username, callback)

// Runs after 1 second

// Always succeed

// callback result: "Profile loaded"

// STEP 3 → sendWelcome(username, callback)

// Runs after 1 second

// callback result: "Welcome <username>"