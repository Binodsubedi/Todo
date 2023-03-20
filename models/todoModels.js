const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true,"Please provide a title to the tasks"],
        unique: [true,"The title has already been taken"]
    },
    started_date:{
        type: Date,
        required: [true, "Please provide the starting date"]
    },
    tasks:[
        {
            task: {
                type: String,
                required: [true,"Please provide a specific task"]
            },
            finished: {
                type: Boolean,
                default: false
            },
            finished_date: Date

        }
    ]
})

const Todos = mongoose.model('Todos', todoSchema);

module.exports = Todos;

