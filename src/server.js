import express,{json} from 'express'
import userRouter from './rutas/user'
import charRouter from './rutas/char'
import cors from 'cors'



const app = express()

/**Configuracion del Puerto */
app.set('port', process.env.PORT || 5000 )

/*cors*/
app.use(cors())

/**Middleworks */
app.use( json() )

/**Rutas */
app.use('/api/user',userRouter)
app.use('/api/char',charRouter)

/** Ruta por Defecto */
app.get('/', function(req, res){

    var msj = "WolfNight Server Online en puerto "
    res.json(
        msj + app.get('port')
    );

 });

export default app