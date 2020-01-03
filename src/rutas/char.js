import {Router} from 'express'
import {
    getChars,
    createChar,
    deleteChar,
    updateChar,
    getCharsByUser
} from '../controllers/charController'




const router = Router()

/** Rutas */
router.get('/',getChars) 
router.get('/user/:id',getCharsByUser)
router.post('/',createChar) 
router.delete('/:id',deleteChar) 
router.put('/',updateChar) 


export default router