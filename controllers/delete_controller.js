var taskList=[
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
    },
    {
        "description": "Sleep",
        "category": "Personal"
    }
]

module.exports.delete=function (req,res){
    for(let task of taskList){
        let Input=document.getElementById(task.description);
        if(Input.checked == true){
            console.log(Input);
        }
    }
    return res.redirect('back');
}