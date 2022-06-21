// import {addShipsToArr} from "./functions.js";

const fireBtn = document.querySelector("#fire-btn")
const resetBtn = document.querySelector("#reset-btn");
const instructionsBtn = document.querySelector("#instructions-btn")
const instructionsModal = document.querySelector("#instructions-modal");
const closeModal = document.querySelector(".close-modal");
const winningModal = document.querySelector("#winning-modal")
const winningModalReplayBtn = document.querySelector("#play-again-btn")

let shipsArr = [];
let shipsInPlay = [];

class Ship {
    constructor(shipType, shipName, totalPoints, attackDamage) {
        this.totalPoints = totalPoints;
        this.attackDamage = attackDamage;
        this.shipType = shipType;
        this.shipName = shipName;
    }

    // when ship is hit 
    hitShip(index, shipNodeValue) {
        this.totalPoints -= this.attackDamage;
        if (this.totalPoints < 0) this.totalPoints = 0;
        shipNodeValue.innerHTML = `<p>${this.shipName} <br> Points: ${this.totalPoints}</p>`;
        if ((this.totalPoints === 0)) {
            document.querySelector(`#${this.shipType}${index}`).classList.add("ship-destroyed");
            shipsInPlay.splice(index);
        } 
        checkIfGameOver()
    }
}

const shipNodeValue = (index) => {
    return document.querySelector(`#${shipsInPlay[index].shipType}${index}`); 
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

fireBtn.addEventListener("click", () => {
    let hitShipIndex = getRandomIndex();
    shipsInPlay[hitShipIndex].hitShip(hitShipIndex, shipNodeValue(hitShipIndex));
    // checkIfGameOver();

});

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
