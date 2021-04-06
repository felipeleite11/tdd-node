module.exports = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert('profiles', [{
            id: 1,
            description: 'Admin',
            created_at: new Date(),
            updated_at: new Date()
        }], {})
    },
    
    down: async (queryInterface) => {
        await queryInterface.bulkDelete('profiles', null, {})
    }
}
