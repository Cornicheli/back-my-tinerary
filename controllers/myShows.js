const Show = require('../models/Show')

const controller = {
    readSU: async(req,res)=>{
        let query = {};
        if(req.query.userId){
            query = {userId: req.query.userId};
        }
        try{
            let shows = await Show.find(query)
            if(shows){
            res.status(200).json({
                response: shows,
                success: true,
                message: 'Shows founded.'
            })}else{
                res.status(404).json({
                    success: false,
                    message: 'Shows not founded.'
                })
            }
        }catch(error){
            res.status(400).json({
                success: false,
                message: error.message
            })
    }
}}

module.exports = controller