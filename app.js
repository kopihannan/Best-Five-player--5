const playerArray = [];
console.log(playerArray.length);

function playerList(player){
   const playerElement = document.getElementById('player-table');
   playerElement.innerHTML = "";
   
    for(i = 0; i<player.length; i++){

        if(i < 5){
            const name = playerArray[i].name;

        const tr = document.createElement('tr');
        tr.innerHTML = `
        <th>${i+1}</th>
         <td>${name}</td>
        `;
        playerElement.appendChild(tr)
        }
        else {
            alert("Sorry! You are not added any Player!!!!!")
        }
    }

}

    // select button 
function selectBtn(btn){
    

    selectedPlayer(btn)
    

}
// player calculate 

function playerCalculate(){
    const playerNumber = playerArray ;
    const totalPlayerNumber =(playerNumber.length)

    
   
    const playerPriceFieldElement = document.getElementById('player-price-field');
    const playerPriceFieldElementString = playerPriceFieldElement.value;
    const playerPriceField = parseInt(playerPriceFieldElementString);
    
    const perPlayerRate = totalPlayerNumber * playerPriceField;

    
     const totalPlayerRate =  document.getElementById('player-rate').innerText = perPlayerRate;
 
     return totalPlayerRate;
}
document.getElementById('player-calculte').addEventListener('click', function(){

    playerCalculate()
})

// others manager coach calculate 
document.getElementById('total-expences').addEventListener('click', function(){

  const totalManagerExpences =  playerCalculate();

  const coachPriceElement = document.getElementById('coach-rate');
  const coachPriceElementString = coachPriceElement.value;
  const coachPrice = parseInt(coachPriceElementString);

  const managerRateElement = document.getElementById('manager-rate');
  const managerRateElementString = managerRateElement.value;
  const managerRate = parseInt(managerRateElementString);

  const totalCoachMangerRate = coachPrice + managerRate;
  const finalPlayerCoachManagerRate = totalCoachMangerRate + totalManagerExpences;
  document.getElementById('final-total-cost').innerText = finalPlayerCoachManagerRate;
  
})