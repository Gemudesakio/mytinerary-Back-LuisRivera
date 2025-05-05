const validatorSchema = (schema) => [    
    (req,res,next)=>{
        console.log("entro a validator");
        const validated = schema.validate(req.body, { abortEarly: false });
   if(validated.error){
        return  res.status(400).json({
            success: false,
            message: validated.error.details.map(error=>error.message)
        })
   }
   next()
}
]

export default validatorSchema