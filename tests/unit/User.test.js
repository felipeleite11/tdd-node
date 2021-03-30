const bcrypt = require('bcryptjs')

const truncate = require('../utils/truncate')

const factories = require('../factories')

describe('User', () => {
	beforeEach(async () => {
		await truncate()
	})

	it('should encrypt user password when save them.', async () => {
		const user = await factories.create('User', {
			password: '123'
		})

		const matched = await bcrypt.compare(user.password, user.password_hash)

		expect(matched).toBe(true)
	})
})