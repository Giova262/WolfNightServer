import Sequelize from 'sequelize'
import {sequelize} from '../bd/database'

const User = sequelize.define('users',{

    id:{
        type:  Sequelize.INTEGER,
        primaryKey: true
    },

    nickname:{
        type: Sequelize.TEXT
    },

    mail:{
        type: Sequelize.TEXT
    },

    pass:{
        type: Sequelize.TEXT
    },

    foto:{
        type: Sequelize.TEXT
    },

    L:{
        type: Sequelize.BOOLEAN
    },

    M:{
        type: Sequelize.BOOLEAN
    },

    MI:{
        type: Sequelize.BOOLEAN
    },

    J:{
        type: Sequelize.BOOLEAN
    },

    V:{
        type: Sequelize.BOOLEAN
    },

    S:{
        type: Sequelize.BOOLEAN
    },

    D:{
        type: Sequelize.BOOLEAN
    },

    HL:{
        type: Sequelize.TEXT
    },

    HM:{
        type: Sequelize.TEXT
    },

    HMI:{
        type: Sequelize.TEXT
    },

    HJ:{
        type: Sequelize.TEXT
    },

    HV:{
        type: Sequelize.TEXT
    },

    HS:{
        type: Sequelize.TEXT
    },

    HD:{
        type: Sequelize.TEXT
    },

    token:{
        type: Sequelize.TEXT
    },

})

export default User
