import Sequelize from 'sequelize'
import {sequelize} from '../bd/database'

const Event = sequelize.define('events',{

    id:{
        type:  Sequelize.INTEGER,
        primaryKey: true
    },

    name_user:{
        type: Sequelize.TEXT
    },

    titulo:{
        type: Sequelize.TEXT
    },

    time:{
        type: Sequelize.TEXT
    },

    descripcion:{
        type: Sequelize.TEXT
    }

})

export default Event