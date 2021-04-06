module.exports = (sequelize, DataTypes) => {
	const Profile = sequelize.define('Profile', {
		description: DataTypes.STRING
	})
	
	return Profile
}