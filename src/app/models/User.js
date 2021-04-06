const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define('User', {
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true
		},
		password_hash: DataTypes.STRING,
		password: DataTypes.VIRTUAL
	})

	User.beforeSave(async user => {
		if(user.password) {
			user.password_hash = await bcrypt.hash(user.password, 8)
		}
	})

	User.prototype.checkPassword = function(password) {
		return bcrypt.compare(password, this.password_hash)
	}

	User.prototype.generateToken = function() {
		return jwt.sign({ id: this.id }, process.env.APP_SECRET)
	}

	User.associate = function(models) {
		User.belongsTo(models.Profile, { foreignKey: 'profile_id', as: 'profile' })
	}
	
	return User
}
