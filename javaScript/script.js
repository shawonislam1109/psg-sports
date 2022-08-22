const getPlayer = [];


function inputFieldInPlayer(element){
     const count = displayPlayer();  
            const perPlayer = document.getElementById(element);
            const perPlayerString = perPlayer.value; 
            const perplayerValue = parseFloat(perPlayerString);
            const perPlayerCostCalculate = perplayerValue * count ;
            return perPlayerCostCalculate;      
}

function manerAndcoach(element){
    const perPlayer = document.getElementById(element);
    const perPlayerString = perPlayer.value; 
    const perplayerValue = parseFloat(perPlayerString);
    return perplayerValue; 
}

function displayPlayer(){
    const inputPlayer = document.getElementById('input-player');
    inputPlayer.textContent = ' ';
    let count = 0;
        for(let i = 0; i<getPlayer.length; i++){
            count++;
            const name = getPlayer[i].playerName;
            
            if(  count <  6){
                    const h1 = document.createElement('h1');
                    h1.innerHTML = `
                    <h1 class="text-2xl font-bold">${count}. ${name}</h1>
                    `;
                    const player =  inputPlayer.appendChild(h1); 
                }
                else{
                    alert('squad is Full so not Allow anyone'); 
                       
                }
            }  
    return count; 
    
}

function clickBtn(element){

    const playerName = element.parentNode.parentNode.children[0].innerText; 
    const btton = (element.disabled) = true; 
   
    const playerNameObj = {
        playerName : playerName,
    }
     
    getPlayer.push(playerNameObj);
        displayPlayer();
    // return btton ; 
}

document.getElementById('calculate').addEventListener('click',function(){

         const perplayerValue = inputFieldInPlayer('perplayer');
        const playerExpence = document.getElementById('plyerExpences');
        playerExpence.innerText = perplayerValue ; 
    })

    document.getElementById('totalCalculate').addEventListener('click',function(){

        const perplayerValue = inputFieldInPlayer('perplayer');
         console.log(perplayerValue);

        const mangerCost =  manerAndcoach('mangerCost');
        const coachCost =  manerAndcoach('coachCost');

        const mangerAndcoachCost = mangerCost + coachCost;
        const totalCostIs = perplayerValue + mangerAndcoachCost ; 

        const total =  document.getElementById('total');
           total.innerText = totalCostIs ; 
    })


    
    