let currentlyPlaying = true;
let startButton = document.getElementById('start');
let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById("door3");

let botDoorPath = 'https://content.codecademy.com/projects/chore-door/images/robot.svg';
let beachDoorPath = 'https://content.codecademy.com/projects/chore-door/images/beach.svg';
let spaceDoorPath = 'https://content.codecademy.com/projects/chore-door/images/space.svg';


doorImage1.onclick = () => {
  
  if (currentlyPlaying && !isClicked(doorImage1)){
    doorImage1.src = openDoor1;
    playDoor(doorImage1);
  }
  
};
doorImage2.onclick = () => {
  
  if (currentlyPlaying && !isClicked(doorImage2)){
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
  }
};
doorImage3.onclick = () => {
  
  if (currentlyPlaying && !isClicked(doorImage3)){
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
  }
};

startButton.onclick = () =>{
  if (currentlyPlaying===false){
    startRound();
  }
}




function startRound(){
  doorImage1.src = 'https://content.codecademy.com/projects/chore-door/images/closed_door.svg';
  doorImage2.src = 'https://content.codecademy.com/projects/chore-door/images/closed_door.svg';
  doorImage3.src = 'https://content.codecademy.com/projects/chore-door/images/closed_door.svg';
  numClosedDoors = 3;
  startButton.innerHTML = 'Good Luck';
  currentlyPlaying = true;
}



let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let choreDoor = Math.floor(Math.random()* numClosedDoors);

function randomChoreDoorGenerator(){
  if (choreDoor === 0){
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;

  } else if(choreDoor === 1){
    openDoor1 = beachDoorPath;
    openDoor2 = botDoorPath;
    openDoor3 = spaceDoorPath;   
  }else{ 
    openDoor1 = spaceDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = botDoorPath;
  }

};

randomChoreDoorGenerator()



function gameOver(status){
  if (status === 'win'){
    startButton.innerHTML = 'You win! Play again?'
  }else{
    startButton.innerHTML = 'Game over! Play again?';  
  }
  currentlyPlaying = false;
  
}
let  closedDoorPath = 'https://content.codecademy.com/projects/chore-door/images/closed_door.svg';


function isBot(door){
  if (door.src === botDoorPath){
    return true;
  }else{
    return false;
  }
}

function isClicked(door){
  if (closedDoorPath === door.src){
    return false;
  }else{
    return true;
  }
}

function playDoor(door){
  numClosedDoors--;
  if (numClosedDoors === 0){
    gameOver('win');
  }else if(isBot(door)){
    gameOver()
  }

}

startRound();




