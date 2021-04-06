module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'profile_id', { 
      type: Sequelize.INTEGER,
      references: {
        model: 'profiles',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT'
    });
  },

  down: async (queryInterface) => {
    return queryInterface.removeColumn('users', 'profile_id');
  }
}
