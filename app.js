 const playerList = [];

 function listItem(players){

    const list = document.getElementById('player-table');
    list.innerHTML = "";
    for(let i = 0; i<players.length ; i++){

        if(i < 5){
            const name = playerList[i].playerName;
            console.log(name);
    
            const tr = document.createElement('tr');
            tr.innerHTML =`
            <th>${[i+1]}</th>
            <td>${name}</td>
            `;
            list.appendChild(tr);
        }
        else{
            alert("You are not added any Player")
        }
    }
 }

 function selectBtn(element){
    
    const playerName = element.parentElement.parentElement.children[0].innerText;


    const player = {
        playerName: playerName,
    }

    playerList.push(player);

    listItem(playerList);
    
}

// player priceing calculation

document.getElementById('player-price').addEventListener('click', function(){
    
    const playerPriceElement = document.getElementById('player-price-field');
    const playerPriceElementString = playerPriceElement.value;
    const playerPrice = parseInt(playerPriceElementString)
    console.log(playerPrice);
})