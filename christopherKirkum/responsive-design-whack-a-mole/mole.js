// Write your JS here.

  let popUpRandomMole=()=>{
    let moles = document.querySelectorAll(".wgs__mole-head");
    let random = Math.floor(Math.random()*(moles.length));
    let currentMole = moles[random];
    currentMole.classList.remove("wgs__mole-head--hidden");
    setTimeout(()=>{hidenMole(currentMole)},3000);
  }

  let  hidenMole=(ele)=>{
    ele.classList.add("wgs__mole-head--hidden");
    setTimeout(popUpRandomMole,1000)
  }

window.addEventListener('DOMContentLoaded', () => {
    let moles = document.querySelectorAll(".wgs__mole-head");

  setTimeout(popUpRandomMole,0);
  moles.forEach(ele => {
      ele.addEventListener("click", ()=>{
          ele.classList.add("wgs__mole-head--hidden")
      })

  });
  });
