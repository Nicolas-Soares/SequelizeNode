const User = require('../models/User')

module.exports = {
    async cadastrar(req, res) {
        const { username, email } = req.body

        const user = await User.create({ username, email })

        return res.json(user)
    },

    async read(req, res) {
        const result = await User.findAll()

        return res.json(result)
    },
}