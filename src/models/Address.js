const { Model, DataTypes } = require('sequelize')
const User = require('./User')

class addresses extends Model {
    static init(sequelize) {
        super.init({
            zipcode: DataTypes.STRING,
            street: DataTypes.STRING,
            number: DataTypes.INTEGER,
        }, {
            sequelize
        })
    }

    static associate() {
        this.belongsTo(User, { foreignKey: 'user_id', as: 'user' })
    }
}

module.exports = addresses