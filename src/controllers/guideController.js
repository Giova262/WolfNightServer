import Guide from '../models/guideModel'


/**Constante */
const atributos = [
    'id',
    'id_user',
    'titulo',
    'url',
    'descripcion',
    'categoria'
]


/** Traer todas las guias */
export async function getGuides(req,res){

    try {

        const guides = await Guide.findAll({
            attributes: atributos
        });
        
        if(guides){
            res.status(200).json({
                message:"Todas las publicaciones son.",
                data: guides,
                status:0
            })
        }else{
            res.status(200).json({
                message:"No hay publicaciones",
                data: guides,
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

/** Crea nueva Guia */
export async function createGuide(req,res){

    const {
        id_user,
        titulo,
        url,
        descripcion,
        categoria
    } = req.body

    try {

        var newGuide = await Guide.create(

            {
                id_user,
                titulo,
                url,
                descripcion,
                categoria
            },
            {
                fields:[
                    'id_user',
                    'titulo',
                    'url',
                    'descripcion',
                    'categoria'
                ]
            }
        )

        if(newGuide){

            res.status(200).json({
                message:"Guia publicada Exitosamente.",
                data: newGuide,
                status:0
            })

        }else{

            res.status(400).json({
                message:"Error al crea Guia.",
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
export async function getGuide(req,res){

    const { id } = req.params;

    try {

        const guideFound = await Guide.findOne({
            where: {

                id:id

            },
            attributes:atributos
        });

        if(guideFound){
    
            res.status(200).json({
                message:"Guia encontrada.",
                data:guideFound,
                status:1
            })

        }else{
            res.status(200).json({
                message:"Guia no se encontrada.",        
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


/** Elimina un Guia */
export async function deleteGuide(req,res){

    res.json({
        message:"Guia Borrada."
    })
}

/** Actualiza un Guia */
export async function updateGuide(req,res){

    res.json({
        message:"Guia Actualizada."
    })
}

