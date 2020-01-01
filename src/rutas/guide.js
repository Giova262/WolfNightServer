import {Router} from 'express'
import {
    getGuides,
    getGuide,
    createGuide,
    deleteGuide,
    updateGuide
} from '../controllers/guideController'




const router = Router()

/** Rutas */
router.get('/',getGuides) 
router.get('/:id',getGuide) 
router.post('/',createGuide) 
router.delete('/:id',deleteGuide) 
router.put('/:id',updateGuide) 


export default router