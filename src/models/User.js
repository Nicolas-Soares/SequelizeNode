const { Model, DataTypes } = require('sequelize')
const Address = require('./Address')

class users extends Model {
    static init(sequelize) {
        super.init({
            username: DataTypes.STRING,
            email: DataTypes.STRING,
        }, {
            sequelize
        })
    }

    static associate() {
        this.hasMany(Address, { foreignKey: 'user_id', as: 'addresses' })
    }
}

module.exports = users