const { sequelize } = require('../../src/app/models')

const persistentModels = ['Profile']

module.exports = () => {
	return Promise.all(Object.keys(sequelize.models).map(key => {
		if(persistentModels.includes(key)) {
			return
		}

		return sequelize.models[key].destroy({ truncate: true, force: true })
	}))
}