practica de fulltack inicial aplicando react en el front, express en el back, en el entorno de node con mondodb
rama miiddlewares

====Autenticacion en el back-end================

======register=======
1. antes de empezar se deben validar con joi los controladores create y update
    1.1 instalar joi npm install joi-oid
    1.2 crear schemas de validacion, organizar en carpetas Schemas/user
    1.3 crear un middleware que compare esos shcemas con la informacion que llega del body
2. desppues de validar debemos verificar que el correo ingresado no exista ya en nuestra base de datos y si existe retornar un mensaje  
4. si el correo no exsite debemos entonces ahora crear erl usuario, pero hasheamos su contrasenia, mediante bcryptjs
    4.1 instalamos bycrypsjs nppm install npm install bcryptjs
    4.2 importamos la libreria en el middleware y hasheamos la contrasenia y devolvemos ese valor al body


======sigIn========
1. creamos un schema para validar el correo y la contrasenia
2.  validamos si el correo que se ingressa no existe, si no existe se retorna 400 y acount not exist y si exsite next()
3. validamos la contrasenia, utilizamos bcrypt.compare para validar la contrasenia quye entra en el body con la del usuario encontrado con el email

======jwt========
1. instalar JWT --> npm install jsonwebtoken
2. mediante un middleware generamos el token,  el cual despues retornamos en el controlador sigInn junto con informacion basiuca del usuario para pintar su sesion en front

=====Passport y passport-jwt======
1. instalar passport y passport-jwt: Para manejar la autenticación con 
npm install passport passport-jwt
2. creamos un middleware que utilizara passport para validar el token
    2.1 debemos importar passport  de passport
    2.2 importamos Strategy, ExtractJwt de passport-jwt
    definimos una funcion:

    passport.use( 
    new Strategy({...
    //configuracion del validador de jwt
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: ...

    }),

    //si logra pasar la validacion entrara a la siguiente funcion
    //la funcion que se ejecutara si el token es valido, en este caso una funcion que retorna al usuario si es encontrado, nulo sino 
    async(jwtPayload, done)=>{...})
    

