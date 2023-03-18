const User = require('../models/todoModels')


exports.getAllTodos = async (req,res)=>{

    // const insert = await User.create({title:"Work", started_date: Date.now().toString(),tasks:[{
    //     task:"hello there"},{task:"Hi again"}]
    // })

    // console.log(insert)

    res.status(200).json({
        status:'success'
    })
}
