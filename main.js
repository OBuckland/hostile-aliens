// import {addShipsToArr} from "./functions.js";
import {Ship} from "./functions.js"

const fireBtn = document.querySelector("#fire-btn")
const resetBtn = document.querySelector("#reset-btn");
const instructionsBtn = document.querySelector("#instructions-btn")
const instructionsModal = document.querySelector("#instructions-modal");
const closeModal = document.querySelector(".close-modal");
const winningModal = document.querySelector("#winning-modal")
const winningModalReplayBtn = document.querySelector("#play-again-btn")

let shipsArr = [];
let shipsInPlay = [];

const displayNewPoints = (index, currentShip) => {
    document.querySelector(`#${currentShip.shipType}${index}`).innerHTML = `<p>${currentShip.shipName} <br> Points: ${currentShip.totalPoints}</p>`
}

const shipDestroyed = (index, currentShip) => {
    document.querySelector(`#${currentShip.shipType}${index}`).classList.add("ship-destroyed");
    shipsInPlay.splice(index);
}

// almost pure function for buidling shipis - the Ship class uses DOM 
const addShipsToArr = (indexStart, shipType, shipName, totalPoints, attackDamage, numberOfShips) => {
    for (let index = indexStart; index < (indexStart + numberOfShips); index++) {
        shipsArr.push(new Ship(shipType, shipName, totalPoints, attackDamage));
        shipsInPlay = [...shipsArr];
    }    
}

// the DOM element of building the ships 
const createShipHTML = () => {
    shipsArr.forEach(ship => {
        document.querySelector(`.${ship.shipType}`).innerHTML += `<div class="ship" id="${ship.shipType}${shipsArr.indexOf(ship)}"><p>${ship.shipName} <br> Points:${ship.totalPoints}</p></div>`;
    });
}

const buildShips = () => {
    addShipsToArr(0, "mothership", "Mother Ship", 100, 9, 1);
    addShipsToArr(1, "defence", "Defence Ship", 80, 10, 5);
    addShipsToArr(6, "attack", "Attack Ship", 45, 12, 8);
    createShipHTML();
}

buildShips();
// createShipHTML();

const getRandomIndex = () => {    
    const randomIndex = Math.floor(Math.random()* shipsInPlay.length);    
    return randomIndex; }

console.log(shipsInPlay)

const checkIfGameOver = () => {
    if (shipsArr[0].totalPoints === 0 || shipsArr.every(ship => ship.totalPoints === 0)){
        console.log("gameOVer")
        gameOver()
    } 
}

// when game over show winning modal with option to replay game
const gameOver = () => winningModal.style.display = "block";

const resetGame = () => {
    shipsArr = [];
    shipsInPlay = [];
    document.querySelector(".mothership").innerHTML = "";
    document.querySelector(".defence").innerHTML = "";
    document.querySelector(".attack").innerHTML = "";
    buildShips()
    winningModal.style.display = "none";
}

// Buttons and event listeners
const fireAtShip = () => {
    let hitShipIndex = getRandomIndex();
    let currentShip = shipsInPlay[hitShipIndex]
    currentShip.hitShip(hitShipIndex);
    if (currentShip.totalPoints === 0){
        shipDestroyed(hitShipIndex, currentShip)
    }
    checkIfGameOver();
    displayNewPoints(hitShipIndex, currentShip);
}

fireBtn.addEventListener("click", fireAtShip);

resetBtn.addEventListener("click", resetGame)

instructionsBtn.addEventListener("click", () => {
    instructionsModal.style.display = "block";
  })
  
closeModal.addEventListener("click", () => {
    instructionsModal.style.display = "none";
  }) 

winningModalReplayBtn.addEventListener("click", resetGame)

  // get random index - then to into ships array
// const getRandomShip = () => {
//     const randomIndex = Math.floor(Math.random() * shipsArr.length);
//     const randomShip = shipsArr[randomIndex];
//     return randomShip;
//      };


// const buildShips = (indexStart, shipType, shipName, totalPoints, attackDamage, numberOfShips) => {
//     for (let index = indexStart; index < (indexStart + numberOfShips); index++) {
//         shipsArr.push(new Ship(shipType, shipName, totalPoints, attackDamage));
//         document.querySelector(`.${shipType}`).innerHTML += `<div class="ship" id="${shipType}${index}"><p>${shipName} <br> Points:${totalPoints}</p></div>`;
//     }    
// }

// const startGame = () => {
//     buildShips(0, "mothership", "Mother Ship", 100, 50, 1);
//     buildShips(1, "defence", "Defence Ship", 80, 50, 5);
//     buildShips(6, "attack", "Attack Ship", 45, 50, 8);
//     // shipsInPlay = [...shipsArr];
// }


    // getShip = () => {
    //    const randomShip = Math.random() * shipArr.length;
    // }



    // extend class for hit type. parameteres: starting points, loss increment.

    // METHOD for randomly selecting a ship
    // cannont be a ship that has 0 totalPoints

    //METHOD  for decreasing value of ship when hit
    // will need to recognise the hit points and decrease total points
    // if mothership hit points go to zero
    //update innder html of ship points 


//Insturctions button and plya again
// Winning modal 
// BUTTON - ON CLICK HIT A RANDOM SHIP 
