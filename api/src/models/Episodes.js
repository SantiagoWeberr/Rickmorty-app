const { DataTypes } = require('sequelize') 
const UUID = require('uuid')

module.exports = function(sequelize){
    return sequelize.define('episode',{
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true
        },
        name : {
            type : DataTypes.STRING,
            allowNull: false,
        }
    })
}