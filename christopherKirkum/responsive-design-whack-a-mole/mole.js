// Write your JS here.



//  function popUpRandomMole(){
//     let moles = document.querySelectorAll(".wgs__mole-head");
//     let random = Math.floor(Math.random()*(moles.length));
//     let currentMole = moles[random];
//     currentMole.classList.remove("wgs__mole-head--hidden");
//     setTimeout(()=>{hidenMole(currentMole)},1000);
//   }

//   function hidenMole(ele){
//     ele.classList.add("wgs__mole-head--hidden");
//     setTimeout(()=>{popUpRandomMole()},1000)
//   }

// window.addEventListener('DOMContentLoaded', () => {
//   setTimeout(()=>{popUpRandomMole()},0)
//   });




  let popUpRandomMole=()=>{
    let moles = document.querySelectorAll(".wgs__mole-head");
    let random = Math.floor(Math.random()*(moles.length));
    let currentMole = moles[random];
    currentMole.classList.remove("wgs__mole-head--hidden");
    setTimeout(()=>{hidenMole(currentMole)},1000);
  }

  let  hidenMole=(ele)=>{
    ele.classList.add("wgs__mole-head--hidden");
    setTimeout(popUpRandomMole,1000)
  }

window.addEventListener('DOMContentLoaded', () => {
  setTimeout(popUpRandomMole,0)
  });





    // setInterval(() => {
    //   const moleHeads = document.querySelectorAll('.wgs__mole-head');
    //   for (let moleHead of moleHeads) {
    //     moleHead.classList.toggle('wgs__mole-head--hidden');
    //   }
    // }, 1000);
