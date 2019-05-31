// Rover Object Goes Here
// ======================

 var rover = {
   direction: "N",
   positionX: 0 ,
   positionY: 0,
 };
var travelLog = [];
 
// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      console.log("Rover direction: "+rover.direction);
      break;
    case "E":
      rover.direction = "N";
      console.log("Rover direction: "+rover.direction);
      break;
    case "S":
      rover.direction = "E";
      console.log("Rover direction: "+rover.direction);
      break;
    default:
      rover.direction = "S";
      console.log("Rover direction: "+rover.direction);
      break;
  }
}

function turnRight(rover){
  console.log("turnRight was called!");
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      console.log("Rover direction: "+rover.direction);
      break;
    case "E":
      rover.direction = "S";
      console.log("Rover direction: "+rover.direction);
      break;
    case "S":
      rover.direction = "W";
      console.log("Rover direction: "+rover.direction);
      break;
    default:
      rover.direction = "N";
      console.log("Rover direction: "+rover.direction);
      break;
  }
}
function moveForward(rover){
  console.log("moveForward was called")
  switch (rover.direction){
    case "N":
      if(rover.positionY >0){
      rover.positionY--;
      travelLog.push((rover.positionX).toString()+","+rover.positionY.toString());
      console.log(rover.positionX +"," +rover.positionY);
      }
      else{
        console.log("Out of bounds");
      }
      break;
    case "E":
      if(rover.positionX < 9){
      rover.positionX++;
      travelLog.push((rover.positionX).toString()+","+rover.positionY.toString());
      console.log(rover.positionX +"," +rover.positionY);
      break;
    }
    else{
      console.log("Out of bounds");
    }
    case "S":
    if(rover.positionY < 9){
      rover.positionY++;
      travelLog.push((rover.positionX).toString()+","+rover.positionY.toString());
      console.log(rover.positionX +"," +rover.positionY);
      break;}
    
      else{
        console.log("Out of bounds");
      }
    
    case "W":
      if(rover.positionX > 0){
        rover.positionX--;
      travelLog.push((rover.positionX).toString()+","+rover.positionY.toString());
      console.log(rover.positionX +"," +rover.positionY);
      break;
      }
      else{
        console.log("Out of bounds");
      }  
  }
}
function commandsList(commands){
  for (let index = 0; index < commands.length; index++) {
    switch (commands[index]) {
      case "r":
        turnRight(rover);
        break;
      case "l":
        turnLeft(rover);
        break;
      case "f":
        moveForward(rover);
        break;
      case "b":
        moveBackward(rover);
   } 
  }
console.log(travelLog)
}
function moveBackward(rover){
  console.log("moveBackward was called")
  switch (rover.direction){
    case "N":
      rover.positionY++;
      console.log(rover.positionX +"," +rover.positionY);
      break;
    case "E":
      rover.positionX--;
      console.log(rover.positionX +"," +rover.positionY);
      break;
    case "S":
      rover.positionY--;
      console.log(rover.positionX +"," +rover.positionY);
      break;
    case "W":
      rover.positionX++;
      console.log(rover.positionX +"," +rover.positionY);
      break;
  }
}