const db=require('../config/mongoose');
const Task=require('../models/task');

module.exports.delete=async function (req,res){
    try {
        let taskIds=req.body.check;
        for(let taskId of taskIds){
            await Task.findByIdAndDelete(taskId);
        }
        return res.redirect('back');
    } catch (error) {
        console.log("Error in deleting contact.",error);
        return;
    }
}