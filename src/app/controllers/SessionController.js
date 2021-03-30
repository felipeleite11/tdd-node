const { User } = require('../models')

class SessionController {
	async store(req, res) {
		const { email, password } = req.body

		const user = await User.findOne({
			where: { email }
		})

		if(!user) {
			return res.status(404).json({ msg: 'Usuário não encontrado.' })
		}

		if(!await user.checkPassword(password)) {
			return res.status(401).json({ msg: 'Senha incorreta.' })
		}

		return res.json({ 
			user,
			token: user.generateToken()
		})
	}
}

module.exports = new SessionController()