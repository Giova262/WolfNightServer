import User from '../models/userModel'
import jwt from 'jsonwebtoken'
import nodemailer from 'nodemailer'


/**Constante */
const atributos = [
    'id',
    'nickname',
    'mail',
    'pass',
    'foto',
    'L',
    'M',
    'MI',
    'J',
    'V',
    'S',           
    'D',
    'HL',
    'HM',
    'HMI',
    'HJ',
    'HV',
    'HS',           
    'HD',
    'token'
]


/** Traer todos los usuarios */
export async function getUsers(req,res){

    try {

        const users = await User.findAll({
            attributes: [
            'id',
            'nickname',
            'foto',
            'L',
            'M',
            'MI',
            'J',
            'V',
            'S',           
            'D',
            'HL',
            'HM',
            'HMI',
            'HJ',
            'HV',
            'HS',           
            'HD'
            ]
        });
        
        if(users){
            res.status(200).json({
                message:"Todos los usuarios registrados son.",
                data: users,
                status:0
            })
        }else{
            res.status(200).json({
                message:"No hay usuarios registrados",
                data: users,
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

/** Crea nuevo usuario */
export async function createUser(req,res){

    const {
    nickname
    ,mail,pass,foto,
 	L,M,MI,J,V,S,D,
 	HL,HM,HMI,HJ,HV,HS,HD,
 	token
    } = req.body

    try {

        var newUser = await User.create(

            {
                nickname: nickname,
                mail:mail,
                pass:pass,
                foto:foto,
                L:L,
                M:M,
                MI:MI,
                J:J,
                V:V,
                S:S,
                D:D,
                HL:HL,
                HM:HM,
                HMI:HMI,
                HJ:HJ,
                HV:HV,
                HS:HS,
                HD:HD,
                token:token
            },
            {
                fields:[
                    'nickname',
                    'mail',
                    'pass',
                    'foto',
                    'L',
                    'M',
                    'MI',
                    'J',
                    'V',
                    'S',           
                    'D',
                    'HL',
                    'HM',
                    'HMI',
                    'HJ',
                    'HV',
                    'HS',           
                    'HD',
                    'token'
                ]
            }
        )

        if(newUser){

            var newtoken = jwt.sign({newUser}, 'kawabonga', {
                expiresIn: 60 * 60 * 24 // expires in 24 hours
            })

            res.status(200).json({
                message:"Usuario Creado Exitosamente.",
                data: newUser,
                token:newtoken,
                status:0
            })

        }else{

            res.status(400).json({
                message:"Error al crear Usuario.",
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
export async function getUser(req,res){

    const { id } = req.params;

    try {

        const userFound = await User.findOne({
            where: {

                id:id

            },
            attributes: [
                'id',
                'nickname',
                'foto',
                'L',
                'M',
                'MI',
                'J',
                'V',
                'S',           
                'D',
                'HL',
                'HM',
                'HMI',
                'HJ',
                'HV',
                'HS',           
                'HD'
            ]
        });

        if(userFound){
    
            res.status(200).json({
                message:"Usuario encontrado.",
                data:userFound,
                status:1
            })

        }else{
            res.status(200).json({
                message:"Usuario no se encontrado.",        
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

/**Chequear nickname si existe*/
export async function checkNickname(req,res){

    const { nick } = req.params;

    try {

        const userFound = await User.findOne({
            where: {

                nickname:nick

            },
            attributes: atributos
        });

        if(userFound){
    
            res.status(200).json({
                message:"Usuario encontrado.",
                status:1
            })

        }else{
            res.status(200).json({
                message:"Usuario no se encontrado.",        
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

/** Chequear mail si existe  */
export async function checkMail(req,res){

    const { mail } = req.params;

    try {

        const userFound = await User.findOne({
            where: {

                mail:mail

            },
            attributes: atributos
        });

        if(userFound){
    
            res.status(200).json({
                message:"Usuario encontrado.",
                status:1
            })

        }else{
            res.status(200).json({
                message:"Usuario no se encontrado.",        
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


/** Chequear nombre de usuario */
export async function loginUser(req,res){

    const {mail,pass} = req.body

    try {

        const userFound = await User.findOne({
            where: {
                mail:mail,
                pass:pass
            },
            attributes: atributos
        });

        if(userFound){

            var token = jwt.sign({userFound}, 'kawabonga', {
                expiresIn: 60 * 60 * 24 // expires in 24 hours
            })

            res.status(200).json({
                message:"Usuario encontrado.",
                data:userFound,
                token:token,
                status:1
            })

        }else{

            res.status(200).json({
                message:"Usuario no se encontrado.",        
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


/** Elimina un usuario */
export async function deleteUser(req,res){

    res.json({
        message:"Usuario Borrado."
    })
}

/** Actualiza un usuario */
export async function updateUser(req,res){

    const {
        id,nickname,mail,pass,foto,
        L,M,MI,J,V,S,D,
        HL,HM,HMI,HJ,HV,HS,HD } = req.body

    try {

        await User.findOne({
            where: {          
                id:id
            },
            attributes: [
                'id',
                'nickname',
                'mail',
                'pass',
                'foto',
                'L',
                'M',
                'MI',
                'J',
                'V',
                'S',           
                'D',
                'HL',
                'HM',
                'HMI',
                'HJ',
                'HV',
                'HS',           
                'HD'
            ]
          })
          .then( async user => {

            const userChanged = await user.update({

                nickname: nickname,
                mail:mail,
                pass:pass,
                foto:foto,
                L:L,
                M:M,
                MI:MI,
                J:J,
                V:V,
                S:S,
                D:D,
                HL:HL,
                HM:HM,
                HMI:HMI,
                HJ:HJ,
                HV:HV,
                HS:HS,
                HD:HD
            });

            if(userChanged){

                res.status(200).json({
                    message:'El usuario se actualizo.', 
                    data:userChanged,
                    status:0
                })
            }

          });
        
    } catch (error) {

        res.status(500).json({
            message:error,        
            status:-1
        })
    }
}

/**Enviando mails */
export async function sendMails(req,res){
    const { msj } = req.params;
      
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        secure: false, // use SSL
        port: 25, // port for secure SMTP
        auth: {
               user: 'TeraWolfNight@gmail.com',
               pass: 'CRQCNE2uqi'
           },
           tls: {
            rejectUnauthorized: false
        }
    });

    const users = await User.findAll({
        attributes: [
        'nickname',
        'mail'
        ]
    });

    var lista = []
    users.map( (e,i)=>{
       lista.push(e.mail)
    })
  
    const mailOptions = {
        from: 'TeraWolfNight@gmail.com', // sender address
        to: lista, // list of receivers
        subject: 'Evento Finalizado', // Subject line
        html: '<p>'+msj+'</p>'// plain text body
      };

    transporter.sendMail(mailOptions, function (err, info) {
        if(err)
          console.log(err)
        else{
            console.log(info);
            res.status(200).json({
                message:'Mails enviados',        
                status:-1
            })
        }
         
     });

    
}

