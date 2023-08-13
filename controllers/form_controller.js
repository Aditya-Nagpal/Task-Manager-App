const db=require('../config/mongoose');
const Task=require('../models/task');
module.exports.form=async function (req,res){
    try {
        const newTask=await Task.create(req.body);
        console.log("Task added successfully.",newTask);
        return res.redirect('back');
    } catch (error) {
        console.log("Error in  adding new task.",error);
        return;
    }
};