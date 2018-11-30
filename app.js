const btnColor = document.getElementById('btnColor');
const title = document.querySelector('.title');
const inputTitle = document.getElementById('inputTitle');
const titleID = document.getElementById('titleID');

btnColor.addEventListener('click', el => {
    
    switch(title.style.color) {
        case "cornflowerblue":
            title.style.color = "lightpink"
            break;
        case "lightpink":
            title.style.color = "darksalmon"
            break;
        case "darksalmon":
            title.style.color = "lavender"
            break;   
        default:
            title.style.color = "cornflowerblue"
    }
    
});

inputTitle.addEventListener('change', el => {    
   if (inputTitle.value === ""){
    titleID.textContent = '¡hola!';
   } else {
      titleID.textContent = inputTitle.value; 
   }
});
