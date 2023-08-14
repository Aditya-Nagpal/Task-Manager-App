const db=require('../config/mongoose');
const Task=require('../models/task');

module.exports.delete=async function (req,res){
    try {
        let taskIds=req.body.check;
        if(typeof taskIds === "string"){
            await Task.findByIdAndDelete(taskIds);
        }
        else{
            for(let taskId of taskIds){
                await Task.findByIdAndDelete(taskIds);
            }
        }
        return res.redirect('back');
    } catch (error) {
        console.log("Error in deleting contact.",error);
        return;
    }
}