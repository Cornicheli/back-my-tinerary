// requiero los modulos de nodemailes y googleapis
const {createTransport} = require('nodemailer')
const {google} = require('googleapis')
// defino el constructor de propiedades del modulo de googleapis
const OAuth2 = google.auth.OAuth2
// defino las variables de enteorno con los datos de las credenciales de google
const {GOOGLE_ID, GOOGLE_REFRESH, GOOGLE_SECRET, GOOGLE_URL, GOOGLE_USER, BACK_URL} = process.env

function createClient() {
    return new OAuth2( // requiere los datos que alojamos en las variables
        GOOGLE_ID,
        GOOGLE_SECRET,
        GOOGLE_URL
    )
}

function getTransport(client) {
    // la funcion requiere que le pase la credencial COMPLETA (la recien creada + refresh)
    // accestoKen tiene vencimiento
    //necesito utilizar meotodos de gooogle par apoder "calcular" ese codigo
    const accessToken = client.getAccessToken()
    return createTransport({
        service: 'gmail', // nombre de servicio de mensajeria
        auth: {           // los datos de las credenciales
            user: GOOGLE_USER,
            type: 'OAuth2',
            clientId: GOOGLE_ID,
            clientSecret: GOOGLE_SECRET,
            refreshToken: GOOGLE_REFRESH,
            accessToken: accessToken
        },
        tls: { rejectUnauthorized: false } // propiedad de segurida
        // para que el antivirus no lo rechaze y no lo enive a spam
    })
}
// defino una funcion apra definifir el cuerpo del mail
// va a ser un template string
// debe tener un link hacia una ruta del controlador usuario
// que cambia la propiedad verificado de flase a true
// este metodo es otro metodo que hay que codder
function getEmailBody({email, host, code}) {
    return `
    <div class="card text-center">
        <div class="card-header">
            <h1 class="card-header">Hello. Welcome to MiTinarary</h1>
        <div/>
        <div class="card-body">
            <h2 class="card-title" >Your email is ${email}</h2>
            <h2 class="card-text"> Please click on Verify your Account. </h2>
            <a href="${host}/api/auth/verify/${code}"> Verify my account. </a>
        </div>
    <div/>

    `
}

//defino una ultima function que junta todos los subpasitos anteriores
// esta funcion es la que se necesita exportar y utilizar en el metodo singup
// para efectivamente enviar el correo de verificar
const accountVerificationEmail = async (mailNewUser, codeCripto) => {
// defino una credencial utilizando la funcion anterior
    const client = createClient()
// seteo el refresh token de la credencial
// es necesario setearlo manualmente
// porque el constructor NO admite la propiedad REFRESH TOKEN para la creacion de una credencial
    client.setCredentials({ refresh_token: process.env.GOOGLE_REFRESH })
// defino un transportador 
    const transport = getTransport(client)
// el metodo requiere
    const mailOptions = {
        from: GOOGLE_USER, // desde donde envio el correo
        to: mailNewUser, // hacia quien
        subject: 'Verify your new account in Amazing Events', // asunto del mail
        html: getEmailBody({ email:mailNewUser,code:codeCripto,host:BACK_URL }) // invoco la funcion que retorna el template
    }
// utilizo el metodo sendMail del transportador para enviar el correo 
// e; metodo requiere que le pase 
    await transport.sendMail(mailOptions, // opciones del correo
        (error, response) => { // y una funcion callbacl pra manejar el error
        if (error) {
            console.error(error)
        }
        console.log('Email sent!')
    })
}

module.exports = accountVerificationEmail