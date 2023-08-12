import * as displayDataArray from "./Modules/module.js";

let screenStack=[];

function getID(renderID){
    const displayObject = displayDataArray.displayData.find((display)=>{
            
            if(display.id===renderID)
                return display;
        });
    return displayObject;
}

function renderDisplay(renderObject){
    const temp = document.getElementById('display-div');
    temp.innerHTML=renderObject.code;
}

const backBtn = document.getElementById('back-btn');
backBtn.addEventListener('click',()=>{
    
});

const settingsBtn =document.getElementById('settings-btn');
settingsBtn.addEventListener('click',()=>{
        
        const renderObject = getID('settings');
        renderDisplay(renderObject);
        screenStack.push(renderObject.id);
        console.log(screenStack);
});

