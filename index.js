function getComputerChoice(){
    let random=Math.floor(Math.random()*3);
    if(random===0){
        return 'rock';
    }else if(random===1){
        return 'paper';
    }else{
        return 'scissors';
    }

}


function getHumanChoice(){
    let hu=window.prompt("enter your choice");
    return hu;
}


humanScore=0;
computerScore=0;

function playround(humanchoice,computerchoice){
    if(humanchoice===computerchoice){
        return 'It is a tie';
    }
    if(humanchoice==='rock'){
        if(computerchoice==='paper'){
            computerScore++;
            return 'Computer wins';
        }else{
            humanScore++;
            return 'Human wins';
        }
    }
    if(humanchoice==='paper'){
        if(computerchoice==='scissors'){
            computerScore++;
            return 'Computer wins';
        }else{
            humanScore++;
            return 'Human wins';
        }
    }
    if(humanchoice==='scissors'){
        if(computerchoice==='rock'){
            computerScore++;
            return 'Computer wins';
        }else{
            humanScore++;
            return 'Human wins';
        }
    }
}

function playGame(){
    for(let i=0;i<5;i++){
        let humanchoice=getHumanChoice();
        let computerchoice=getComputerChoice();
        window.alert(playround(humanchoice,computerchoice));
    }
    if(humanScore>computerScore){
        window.alert(`Human wins Score=${humanScore}:${computerScore}`);
    }else if(humanScore<computerScore){
        window.alert(`Computer wins Score=${humanScore}:${computerScore}`);
    }else{
        window.alert(`It is a tie Score=${humanScore}:${computerScore}`);
    }
}
playGame();