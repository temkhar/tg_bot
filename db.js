const {Sequelize} = require('sequelize');

module.exports = new Sequelize(
    'tg_bot',
    'root',
    'root',
    {
        host: '5.188.129.91',
        port: '6432',
        dialect: 'postgres'
    }
)
