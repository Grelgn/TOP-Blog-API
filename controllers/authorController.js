exports.loginForm = (req, res) => {
    return res.send("GET - Author login form")
}

exports.logIn = (req, res) => {
    return res.send("POST - Author login attempt")
}