function selectedPlayer(element){
    const playerSelectElement = element.parentNode.parentNode.children[0].innerText;

    const playerObj = {
        name : playerSelectElement,
    }

    playerArray.push(playerObj)


    playerList(playerArray);
   element.disabled = true;
   element.style.backgroundColor  = "#787878" ;

}