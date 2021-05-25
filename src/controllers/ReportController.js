const { Op } = require('sequelize')
const User = require('../models/User')

module.exports = {
    async show(req, res) {
        //Encontrar todos os usuarios com email que termina em @rocketseat.com.br
        //Desses usuarios, buscar todos que moram na rua Mato Grosso
        //Desses usuarios, buscar as tecnologias que começam com Node

        const users = await User.findAll({
            attributes: ['username', 'email'],
            where: {
                email: {
                    [Op.iLike]: '%@rocketseat.com.br'
                }
            },
            include: [
                { association: 'addresses', where: { street: 'Joao Da Bahia'} },
                {
                    association: 'techs',
                    required: false,
                    where: {
                        name: {
                            [Op.iLike]: 'Node%'
                        }
                    }
                }
            ]   
        })

        return res.json(users)
    }
}