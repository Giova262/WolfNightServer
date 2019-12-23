import {Router} from 'express'
import {
    getChars,
    createChar,
    deleteChar,
    updateChar
} from '../controllers/charController'




const router = Router()

/** Rutas */
router.get('/',getChars) 
router.post('/',createChar) 
router.delete('/:id',deleteChar) 
router.put('/:id',updateChar) 


export default router