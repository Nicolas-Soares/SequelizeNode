const { Model, DataTypes } = require('sequelize')

class techs extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
        }, {
            sequelize,
            tableName: 'techs',
        })
    }

    static associate(models) {
        this.belongsToMany(models.users, { foreignKey: 'tech_id', through: 'user_techs', as: 'users' })
    }
}

module.exports = techs