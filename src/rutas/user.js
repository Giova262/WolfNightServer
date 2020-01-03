import {Router} from 'express'
import {
    getUsers,
    getUser,
    createUser,
    deleteUser,
    updateUser,
    checkMail,
    checkNickname,
    loginUser,
    sendMails
} from '../controllers/userController'




const router = Router()

/** Rutas */
router.get('/',getUsers) 
router.get('/:id',getUser) 
router.get('/check/mail/:mail',checkMail)
router.get('/check/nickname/:nick',checkNickname)
router.get('/email/send/:msj', sendMails);



router.post('/',createUser) 
router.post('/login',loginUser)


router.delete('/:id',deleteUser) 


router.put('/',updateUser) 


export default router