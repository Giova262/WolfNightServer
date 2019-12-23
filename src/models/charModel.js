import Sequelize from 'sequelize'
import {sequelize} from '../bd/database'


const Char = sequelize.define('characters',{

    id:{
        type:  Sequelize.INTEGER,
        primaryKey: true
    },

    id_user:{
        type: Sequelize.INTEGER
    },

    nombre:{
        type: Sequelize.TEXT
    },

    clase:{
        type: Sequelize.TEXT
    },

    nivel:{
        type: Sequelize.INTEGER
    },

    arma:{
        type: Sequelize.TEXT
    },

    armadura:{
        type: Sequelize.TEXT
    },

    botas:{
        type: Sequelize.TEXT
    },

    guantes:{
        type: Sequelize.TEXT
    },

    cinturon:{
        type: Sequelize.TEXT
    },

    rankeado:{
        type: Sequelize.BOOLEAN
    }
})

export default Char
