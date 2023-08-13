let taskList=[
    {
        "description": "water plants",
        "category": "Personal"
    },
    {
        "description": "Do homework",
        "category": "Work"
    },
    {
        "description": "Play",
        "category": "Personal"
    }
]

module.exports.home=function (req,res){
    return res.render('home',{
        title: "My ToDo App",
        task_list: taskList
    });
};