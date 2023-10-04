const {Sequelize} = require('sequelize');

module.exports = new Sequelize(
    'tg_bot',
    'root',
    'fDGgUKAfBV0y',
    {
        host: '5.188.129.92',
        port: '5432',
        dialect: 'postgres'
    }
)
