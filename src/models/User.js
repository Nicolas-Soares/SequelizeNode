const { Model, DataTypes } = require('sequelize')

class users extends Model {
    static init(sequelize) {
        super.init({
            username: DataTypes.STRING,
            email: DataTypes.STRING,
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.hasMany(models.addresses, { foreignKey: 'user_id', as: 'addresses' })
        this.belongsToMany(models.techs, { foreignKey: 'user_id', through: 'user_techs', as: 'techs' })
    }
}

module.exports = users