var form=document.getElementById('task-form');
var formDivs=form.getElementsByTagName('div');
// for(let i=0;i<3;i++){
//     let Div=formDivs[i];
//     let Input=Div.getElementsByClassName('form-input')[0];
//     Input.addEventListener('focus',function(event){
//         Div.style.backgroundColor="red";
//     })
// }
let currDiv,currInput;
window.addEventListener('click',function(event){
    let Target=event.target;
    let isInput=false;
    for(let i=0;i<3;i++){
        let Div=formDivs[i];
        let Input=Div.getElementsByClassName('form-input')[0];
        if(Target == Input){
            if(currDiv){
                currDiv.style.backgroundColor="white";
                currInput.style.backgroundColor="white";
            }
            isInput=true;
            currDiv=Div;
            currInput=Input;
            break;
        }
    }
    if(isInput){
        currDiv.style.backgroundColor="#d4e9f1";
        currInput.style.backgroundColor="#d4e9f1";
        isInput=false;
    }
    else{
        currDiv.style.backgroundColor="white";
        currInput.style.backgroundColor="white";
    }
});