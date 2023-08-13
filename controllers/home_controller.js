const Task=require('./models/task');
module.exports.home=async function(req,res){
    try {
        const tasks=await Task.find({});
        return res.render('home', {
            title: 'My Todo App',
            tasks_list: tasks
        })
    } catch (error) {
        console.log("Error in fetching contacts from database.");
        return;
    }
};