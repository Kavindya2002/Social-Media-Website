 //create variable
 var settingsmenu = document.querySelector(".settings-menu");
 var darkBtn = document.getElementById("dark-btn");

//Define function
function settingsMenuToggle(){
    settingsmenu.classList.toggle("settings-menu-height");
}

darkBtn.onclick = function(){
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

    if(localStorage.getItem("theme")== "light"){
        localStorage.setItem("theme","dark");
    }
    else{
         localStorage.setItem("theme","light");
    }
}


if(localStorage.getItem("theme")== "light"){
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
}
else if(localStorage.getItem("theme") == "dark"){
    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
}
else{
    localStorage.setItem("theme","light") ; //this line execute when users visit the website at the first time 
}



// use local storage - for use dark mode or light mode on browser
//local storage name is theme and value is dark
//create local storage for webbrowser
