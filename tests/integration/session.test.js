const request = require('supertest')

const truncate = require('../utils/truncate')

const app = require('../../src/app')

const factories = require('../factories')

describe('Authentication', () => {
	beforeEach(async () => {
		await truncate()
	})

	it('should have user and JWT token when authentication is successfully.', async () => {
		const user = await factories.create('User')

		const response = await request(app).post('/sessions').send({
			email: user.email,
			password: user.password
		})
		
		expect(response.status).toBe(200)
		expect(response.body).toHaveProperty('token')
		expect(response.body).toHaveProperty('user')
	})

	it('should NOT authenticate when user not found.', async () => {
		const user = await factories.create('User', {
			email: 'felipe@robot.rio.br'
		})

		const response = await request(app).post('/sessions').send({
			email: 'manuely@robot.rio.br',
			password: user.password
		})
		
		expect(response.status).toBe(404)
	})

	it('should NOT authenticate with INCORRECT password.', async () => {
		const user = await factories.create('User', {
			password: '123'
		})

		const response = await request(app).post('/sessions').send({
			email: user.email,
			password: '123456'
		})
		
		expect(response.status).toBe(401)
	})

	it('should be ABLE to access private routes when authenticated.', async () => {
		const user = await factories.create('User')

		const response = await request(app)
			.get('/dashboard')
			.set('Authorization', `Bearer ${user.generateToken()}`)
		
		expect(response.status).toBe(200)
	})

	it('should NOT be able to access private routes WITHOUT a JWT token.', async () => {
		const response = await request(app)
			.get('/dashboard')
		
		expect(response.status).toBe(401)
	})

	it('should NOT be ABLE to access private routes with a INVALID JWT token.', async () => {
		const user = await factories.create('User')
		const reverseToken = user.generateToken().split('').reverse().join('')

		const response = await request(app)
			.get('/dashboard')
			.set('Authorization', `Bearer ${reverseToken}`)
		
		expect(response.status).toBe(401)
	})
})