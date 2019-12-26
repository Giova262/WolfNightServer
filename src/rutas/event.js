import {Router} from 'express'
import {
    getevents,
    getevent,
    createEvent,
    deleteEvent,
    updateEvent
} from '../controllers/eventController'


const router = Router()

/** Rutas */
router.get('/',getevents) 
router.get('/:id',getevent) 

router.post('/',createEvent) 

router.delete('/:id',deleteEvent) 

router.put('/:id',updateEvent) 


export default router