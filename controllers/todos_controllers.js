const Todos = require('../models/todoModels')


exports.getAllTodos = async (req,res)=>{

    // const insert = await Todos.create({title:"Work", started_date: Date.now().toString(),tasks:[{
    //     task:"hello there"},{task:"Hi again"}]
    // })

    // console.log(insert)

    const allTodos = await Todos.find();

    // console.log(allTodos);

    res.status(200).json({
        status:'success',
        data:allTodos
    })
}

exports.createTodo = async(req,res)=>{

    // console.log(req.body)
    try{

        // console.log(req)

        const created = await Todos.create(req.body);

        res.status(200).json({
            status:'success',
            data: created
        })

    } catch(err){

        res.status(400).json({
            status:'fail',
            message: err.message
        })

    }

}

exports.checkFinished = async (req,res)=>{

    try{

        // console.log(req.body)

        const {parent_id, id} = req.body;

        
        const finishedOne = await Todos.find({_id:parent_id})
        
        finishedOne[0].tasks.map((el)=>{
            if(el._id == id){
                el.finished = true;
                el.finished_date= Date.now().toString()
            }
        })
        
        // console.log(finishedOne)
        
        await Todos.findOneAndUpdate({_id:parent_id}, finishedOne[0])
        
        
        res.status(200).json({
            status:'success'
        })

    }catch(err){
        // console.log(err)

        res.status(400).json({
            status:'fail',
            message:err.message
        })


    }
}