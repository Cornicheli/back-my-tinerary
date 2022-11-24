//1ero requiero el modelo q necesito controlar
const User = require('../models/User')
//2do defino el obj controller (q va a controlar el modelo)
const controller = {
//met para crear un doc User
create: async (req,res) => {
try{
let new_user = await User.create(req.body)
res.status(201).json({
    id: new_user._id,
    success: true,
    message:"The User was created successfully"
})

}catch(error){
res.status(400).json({
    success: false,
    message: error.message
})
}
},
}
//para usarlo en otros lados lo exporto
module.exports = controller


