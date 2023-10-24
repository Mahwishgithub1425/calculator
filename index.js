let buttons=document.querySelectorAll("button");
let screen=document.querySelector("input");
let valueclicked="";
for(var i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click",(e)=>{
        if(e.target.innerHTML=="="){
            valueclicked=parseFloat(eval(valueclicked));
            screen.value=valueclicked;
        }
        else if(e.target.innerHTML=="C"){
            valueclicked="";
            screen.value="";
        }
        else{
        valueclicked += e.target.innerHTML;
        screen.value=valueclicked;
        }
    });
}