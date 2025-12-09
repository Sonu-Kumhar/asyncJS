function checkBalance(account, cb) {
    setTimeout(() => {
        if (account === "blocked") cb("Account blocked", null)
        else cb(null, `Balance 5000`)
    }, 1000);
}

function verifyPin(pin, cb) {
    setTimeout(() => {
        if (pin === 1234) cb(null, "PIN verified")
        else cb("Incorrect PIN", null)
    }, 1000);
}

function withdraw(amount, cb) {
    setTimeout(() => {
        if (amount > 5000) cb("Insufficient funds", null)
        else cb(null, `Withdrawal successful: ${amount}`)
    }, 1000);
}

function showReceipt(amount, cb) {
    setTimeout(() => {
        cb(null, `Receipt: Withdrawn ${amount} Successfully`)
    }, 1000);
}

checkBalance("blocked", function (err, result) {
    if (err) console.error(err)
    else {
        console.log(result)
        verifyPin(1234, function (err, result) {
            if (err) console.error(err)
            else {
                console.log(result);
                withdraw(2000, function (err, result) {
                    if (err) console.error(err)
                    else {
                        console.log(result)
                        showReceipt(2000, function (err, result) {
                            if (err) console.error(err)
                            else console.log(result);
                        })
                    }
                })
            }
        })
    }
})


// Functions Required

// Implement these 4 async functions:

// 1️⃣ checkBalance(account, callback)

// After 1 second, return balance if account exists

// If account == "blocked" → return error:

// "Account blocked"


// Else return:

// "Balance: <amount>"


// Use any fixed dummy balance like 5000

// 2️⃣ verifyPin(pin, callback)

// After 1 second

// If pin === 1234 → success "PIN Verified"

// Else error: "Incorrect PIN"

// 3️⃣ withdraw(amount, callback)

// After 1 second

// If amount > balance → error "Insufficient funds"

// Else success "Withdrawal successful: <amount>"

// (YES — you must pass balance between functions)

// 4️⃣ showReceipt(amount, callback)

// After 1 second

// Print:

// "Receipt: Withdrawn <amount> Successfully"

// Main Function
// atm(account, pin, amount, finalCallback)


// Order of execution must be:

// checkBalance → verifyPin → withdraw → showReceipt → finalCallback


// If ANY error occurs → stop immediately.

// Example Calls
// atm("user", 1234, 3000, final)
// atm("blocked", 1234, 2000, final)
// atm("user", 1111, 2000, final)
// atm("user", 1234, 8000, final)

// Expected Output Samples

// Valid case:

// Balance: 5000
// PIN Verified
// Withdrawal successful: 3000
// Receipt: Withdrawn 3000 Successfully
// Transaction Complete


// Blocked account:

// Error: Account blocked


// Wrong PIN:

// Balance: 5000
// Error: Incorrect PIN


// Insufficient funds:

// Balance: 5000
// PIN Verified
// Error: Insufficient funds


// STEP 1
function checkBalance(account, cb) {
    setTimeout(() => {
        if (account === "blocked") cb("Account blocked", null);
        else cb(null, 5000); // pass NUMBER, not string
    }, 1000);
}

// STEP 2
function verifyPin(pin, cb) {
    setTimeout(() => {
        if (pin === 1234) cb(null, "PIN Verified");
        else cb("Incorrect PIN", null);
    }, 1000);
}

// STEP 3
function withdraw(balance, amount, cb) {
    setTimeout(() => {
        if (amount > balance) cb("Insufficient funds", null);
        else cb(null, `Withdrawal successful: ${amount}`);
    }, 1000);
}

// STEP 4
function showReceipt(amount, cb) {
    setTimeout(() => {
        cb(null, `Receipt: Withdrawn ${amount} Successfully`);
    }, 1000);
}

// MAIN FUNCTION
function atm(account, pin, amount, finalCallback) {
    checkBalance(account, function (err, balance) {
        if (err) return finalCallback(err);

        console.log("Balance:", balance);

        verifyPin(pin, function (err, result) {
            if (err) return finalCallback(err);

            console.log(result);

            withdraw(balance, amount, function (err, result) {
                if (err) return finalCallback(err);

                console.log(result);

                showReceipt(amount, function (err, receipt) {
                    if (err) return finalCallback(err);

                    console.log(receipt);
                    finalCallback(null, "Transaction Complete");
                });
            });
        });
    });
}

// FINAL CALLBACK
function final(err, msg) {
    if (err) console.error("Error:", err);
    else console.log(msg);
}


// TEST CASES
atm("user", 1234, 3000, final);
// atm("blocked", 1234, 2000, final);
// atm("user", 1111, 2000, final);
// atm("user", 1234, 8000, final);
