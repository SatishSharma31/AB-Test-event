document.querySelector('#menu').addEventListener('click',()=>{
    document.querySelector('nav ul').classList.toggle('showmenu')
})

// function fun(){
//     alert('Kindly register your event');
// }
let myWindow;
function openWindow(){
    
    myWindow = window.open('https://www.google.co.in/','','width=500px,height=300px,left=300px,top=300px');
}
function closeWindow(){
    myWindow.close();
}
let age = 22;
let drive =age>18 ? 'Yes can drive' : 'No drive';
document.getElementById("test"); 


