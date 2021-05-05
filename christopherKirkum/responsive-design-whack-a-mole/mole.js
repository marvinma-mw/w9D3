// Write your JS here.

  let popUpRandomMole=()=>{
    let moles = document.querySelectorAll(".wgs__mole-head:not(.wgs__mole-head--whacked)");
    let random = Math.floor(Math.random()*(moles.length));
    if(moles.length < 1){
        window.alert("You Winn!!")
        return
    }

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
          ele.classList.add("wgs__mole-head--hidden", "wgs__mole-head--whacked")
      })

  });
});
