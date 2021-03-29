const btnSwitch = document.querySelector(".switch");
const mafia = document.getElementById("lstmafia");
const romcom = document.getElementById("lstromcom");

btnSwitch.addEventListener("click", switchGenre());

function switchGenre(){
    
    if(btnSwitch.innerHTML === "Mafia"){
        showMafia();
        hideRomCom();
    }
    else{
        showRomCom();
        hideMafia();
    }
}

function showMafia(){
    mafia.classList.remove("hide");
    btnSwitch.textContent = "Mafia"
}

function hideMafia(){
   mafia.classList.add("hide")
}

function showRomCom(){
    romcom.classList.remove("hide");
    btnSwitch.textContent = "RomCom"
}

function hideRomCom(){
   romcom.classList.add("hide")
}