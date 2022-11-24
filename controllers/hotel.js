const Hotel = require('../models/Hotel')
const controller = {

    create: async ( req, res) =>{
try{
    let new_hotel = await Hotel.create(req.body)
    res.status(201).json({
    id: new_hotel._id,
    success: true,
    message:"The Hotel was created successfully"
    })
} catch(error){
    res.status(400).json({
        success: false,
        message: error.message
})
    }
    },
    update: async (req, res) =>{
        let {id}= req.params
        try{
            let update_hotel= await Hotel.findOneAndUpdate({_id:id},req.body,{new:true})
        if(update_hotel){
            res.status(200).json({
            success: true,
            message:"The Hotel was created successfully"
            })
        }else{
            res.status(400).json({
                success: false,
                message: "The Hotel was notfound created successfully"
        })
        }
    }catch(error){
        res.status(400).json({
        success: false,
        message: error.message
    })
}},

destroy: async (req, res) =>{
    let {id}= req.params
    try{
        let delate_hotel= await Hotel.findOneAndDelete({_id:id})
    if(delate_hotel){
        res.status(200).json({
        success: true,
        message:"The Hotel was successfully removed"
        })
    }else{
        res.status(404).json({
            success: false,
            message: "The Hotel was not found"
    })
    }
}catch(error){
    res.status(404).json({
    success: false,
    message: error.message
})
}},

read: async (req,res) => {
    let query = {}
    let order = {}
    if(req.query.name){
        query = {name: {"$regex": req.query.name,$options:'i'}} 
    }
    if(req.query.order){
        order = {name:req.query.order}
    }
    console.log(req.query)
    try{
        let all = await Hotel.find(query).sort(order);
        if(all.length >= 1){
            res.status(200).json({
                response: all,
                success: true,
                message: 'the hotel was successfully found',
            })
        }else if(all.length === 0){
            res.status(404).json({
                success: false,
                message: 'the hotel was not found',
            })
        }
    }catch(error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
},
readOne: async (req, res) =>{
    let {id} = req.params
    try{
        let hotel = await Hotel.findOne({_id:id}).populate({path:'userId',select:'name photo -_id'});
        if(hotel){
            res.status(200).json({
                success: true,
                data: hotel,
                message: 'the hotel was successfully found',
            })
        }else{
            res.status(404).json({
                success: false,
                message: 'the hotel was not found',
            })
        }
    }catch(error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
},

}

module.exports = controller