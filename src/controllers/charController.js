import Char from '../models/charModel'


/** Traer todos los personajes */
export async function getChars(req,res){

    try {

        const chars = await Char.findAll({
            attributes: [
                'id',
                'id_user',
                'nombre',
                'clase',
                'nivel',
                'arma',
                'armadura',
                'botas',
                'guantes',
                'cinturon',           
                'rankeado'
            ]
        });
        
        if(chars){
            res.status(200).json({
                message:"Todos los usuarios registrados son.",
                data: chars,
                status:0
            })
        }else{
            res.status(200).json({
                message:"No hay usuarios registrados",
                status:1
            })
        }
     
    }catch (error) {

        console.log(error)
        res.status(500).json({
            message:error,
            status:-1
        })
    }
}

/** Trae personajes por id de usuario */
export async function getCharsByUser(req,res){

    const {id} = req.params

    try {

        var chars = await Char.findAll(
            {
                where:{
                    id_user:id
                },
                attributes: [
                    'id',
                    'id_user',
                    'nombre',
                    'clase',
                    'nivel',
                    'arma',
                    'armadura',
                    'botas',
                    'guantes',
                    'cinturon',           
                    'rankeado'
                 ]
            }
        )

        if(chars){

            res.status(200).json({
                message:"Personajes del usuario.",
                data: chars,
                status:0
            })

        }else{

            res.status(400).json({
                message:"No hay personajes para ese usuario.",
                status:-1
            })

        }
        
    } catch (error) {

        console.log(error)
        res.status(500).json({
            message:error,
            status:-1
        })
    }
}

/** Crea nuevo Personajes */
export async function createChar(req,res){

    const {
    id_user,nombre,clase,nivel,
 	arma,armadura,botas,guantes,cinturon,rankeado
    } = req.body

    try {

        var newChar = await Char.create(

            {
                id_user: id_user,
                nombre:nombre,
                clase:clase,
                nivel:nivel,
                arma:arma,
                armadura:armadura,
                botas:botas,
                guantes:guantes,
                cinturon:cinturon,
                rankeado:rankeado
            },
            {
                fields:[              
                    'id_user',
                    'nombre',
                    'clase',
                    'nivel',
                    'arma',
                    'armadura',
                    'botas',
                    'guantes',
                    'cinturon',           
                    'rankeado'
                ]
            }
        )

        if(newChar){

            res.status(200).json({
                message:"Personaje Creado Exitosamente.",
                id: newChar.id,
                status:0
            })

        }else{

            res.status(400).json({
                message:"Error al crear Personaje.",
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

/** Elimina un personaje */
export async function deleteChar(req,res){

    res.json({
        message:"Personaje Borrado."
    })
}

/** Actualiza un personaje */
export async function updateChar(req,res){

    res.json({
        message:"Personaje Actualizado."
    })
}
