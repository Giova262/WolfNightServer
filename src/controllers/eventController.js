
import Event from '../models/eventModel'


/**Constante */
const atributos = [
    'id',
    'name_user',
    'titulo',
    'time',
    'descripcion'
]


/** Traer todos los eventos */
export async function getevents(req,res){

    try {
        
        const eventos = await Event.findAll();

        if(eventos){

            res.status(200).json({
                message:"Todos los eventos son.",
                data: eventos,
                status:0
            })

        }else{

            res.status(400).json({
                message:"No hay eventos.",
                status:-1
            })
        }


    } catch (error) {
        res.status(500).json({
            message:error,
            status:-1
        })
    }
 
}

/** Crea nuevo evento */
export async function createEvent(req,res){

    const { name_user,titulo,time,descripcion } = req.body

    try {

        var newEvent = await Event.create(

            {
                name_user: name_user,
                titulo:titulo,
                time:time,
                descripcion:descripcion
            },
            {
                fields:atributos
            }
        )

        if(newEvent){

            res.status(200).json({
                message:"Evento Creado Exitosamente.",
                data: newEvent,
                status:0
            })

        }else{

            res.status(400).json({
                message:"Error al crear Evento.",
                status:-1
            })
        }
       
    } catch (error) {
        res.status(500).json({
            message:error,
            status:-1
        })
    }

}

/**Traer por id */
export async function getevent(req,res){

    const { id } = req.params;

    try {

        const eventFound = await Event.findOne({
            where: {

                id:id

            },
            attributes: atributos
        });

        if(eventFound){
    
            res.status(200).json({
                message:"Evento encontrado.",
                data:eventFound,
                status:1
            })

        }else{
            res.status(200).json({
                message:"Evento no se encontro.",        
                status:0
            })
        }
        

    } catch (error) {

        res.status(500).json({
            message:error,        
            status:-1
        })
    }

}

/** Elimina un evento */
export async function deleteEvent(req,res){

   const { id } = req.params;

   try {

    await Event.destroy(
        {
            where:{
                id:id
            }
        }
    ).then( function(deletedRecord){

        if(deletedRecord === 1){
            res.status(200).json({
                message:"Evento se elimino correctamente.",        
                status:0
            })         
        }
        else
        {
            res.status(200).json({
                message:"Evento no se encontro.",        
                status:1
            })
        }

    })
       
   } catch (error) {

        res.status(500).json({
            message:error,        
            status:-1
        })
   }
}

/** Actualiza un evento */
export async function updateEvent(req,res){

    res.json({
        message:"Evento Actualizado."
    })
}

