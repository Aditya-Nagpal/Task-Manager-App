const mongoose=require('mongoose');
const taskSchema=new mongoose.Schema({
    descr: {
        type: String,
        required: true
    },
    categ: {
        type: String,
        required: true
    }
    // date: {
    //     type: Date,
    //     required: true
    // }
});

const Task=mongoose.model('Task',taskSchema);
module.exports=Task;