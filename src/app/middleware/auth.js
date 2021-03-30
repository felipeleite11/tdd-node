const jwt = require('jsonwebtoken')
const { promisify } = require('util')

module.exports = async (req, res, next) => {
	const authHeader = req.headers.authorization

	if(!authHeader) {
		return res.status(401).json({ msg: 'Token não encontrado!' })
	}

	const [, token] = authHeader.split(' ')

	try {
		const decoded = await promisify(jwt.verify)(token, process.env.APP_SECRET)

		req.userId = decoded.id

		return next()
	} catch(e) {
		return res.status(401).json({ msg: 'Token inválido!' })
	}
}