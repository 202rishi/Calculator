
const display=document.getElementById('display')
function appendToDisplay(value){
    display.value+=value
    console.log(display)
}
function clearDisplay(){
    display.value='';
    //console.log("hi")
}
function deleteLast(){
    display.value=display.value.slice(0,-1);
}
function cr(){
    try{
        display.value=eval(display.value)
    }catch(error){
        display.value='Error'
    }
}