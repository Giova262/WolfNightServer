import Sequelize from 'sequelize'
import {sequelize} from '../bd/database'


const Guide = sequelize.define('guias',{

    id:{
        type:  Sequelize.INTEGER,
        primaryKey: true
    },

    id_user:{
        type: Sequelize.INTEGER
    },

    titulo:{
        type: Sequelize.TEXT
    },

    url:{
        type: Sequelize.TEXT
    },

    descripcion:{
        type: Sequelize.TEXT
    },

    categoria:{
        type: Sequelize.TEXT
    }
})

export default Guide