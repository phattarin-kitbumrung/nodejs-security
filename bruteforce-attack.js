// Bruteforce Attack Prevention

const ExpressBrute = require('express-brute')
const store = new ExpressBrute.MemoryStore() // stores state locally, don't use this in production
const bruteforce = new ExpressBrute(store)

app.post('/auth',
    bruteforce.prevent, // error 429 if we hit this route too often
    function (req, res, next) {
        res.send('Success!')
    }
)