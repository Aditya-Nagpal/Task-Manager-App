const db=require('../config/mongoose');
const Task=require('../models/task');
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const btncolor={
    Personal: "orange",
    Work: "red",
    School: "green",
    Cleaning: "purple",
    Other: "skyblue"
};
module.exports.home=async function (req,res){
    try {
        const taskList=await Task.find({});
        return res.render('home',{
            title: "My ToDo App",
            task_list: taskList,
            month: month,
            btncolor: btncolor
        });
    } catch (error) {
        console.log("Error in fetching data from database.",error);
        return;
    }
};