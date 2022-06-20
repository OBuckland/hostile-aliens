const motherShipSection = document.querySelector("#mother-ship");
const defenceShipSection = document.querySelector(".defence-ship");
const attackShipSection = document.querySelector(".attack-ship");
const fireBtn = document.querySelector("#fire-btn")
const resetBtn = document.querySelector("#reset-btn");
const instructionsBtn = document.querySelector("#instructions-btn")
const instructionsModal = document.querySelector("#instructions-modal");
const closeModal = document.querySelector(".close-modal");
const winningModal = document.querySelector("#winning-modal")

let shipsArr = [];

class Ship {
    constructor(shipType, shipName, totalPoints, attackDamage) {
        this.totalPoints = totalPoints;
        this.attackDamage = attackDamage;
        this.shipType = shipType;
        this.shipName = shipName;
    }

    hitShip(index) {
        this.totalPoints -= this.attackDamage;
        if (this.totalPoints < 0) this.totalPoints = 0;
        document.querySelector(`#${this.shipType}${index}`).innerHTML = `<p>${this.shipName} <br> Points: ${this.totalPoints}</p>`;
        if ((this.totalPoints === 0)) {
            document.querySelector(`#${this.shipType}${index}`).classList.add("ship-destroyed");
            shipsArr.splice(index);
        } 
        checkIfGameOver()
    }
}

const checkIfGameOver = () => {
    if (shipsArr[0].totalPoints === 0 || shipsArr.every(ship => ship.totalPoints === 0)){
        console.log("gameOVer")
        gameOver()
    } 
}

const gameOver = () => winningModal.style.display = "block";

// When I put export before this, this game breaks
  const addShipsToArr = (indexStart, shipType, shipName, totalPoints, attackDamage, numberOfShips) => {
    for (let index = indexStart; index < (indexStart + numberOfShips); index++) {
        shipsArr.push(new Ship(shipType, shipName, totalPoints, attackDamage));
    }    
}

const createShipHTML = () => {
    shipsArr.forEach(ship => {
        document.querySelector(`.${ship.shipType}`).innerHTML += `<div class="ship" id="${ship.shipType}${shipsArr.indexOf(ship)}"><p>${ship.shipName} <br> Points:${ship.totalPoints}</p></div>`;
    });
}


const buildShips = () => {
    addShipsToArr(0, "mothership", "Mother Ship", 100, 50, 1);
    addShipsToArr(1, "defence", "Defence Ship", 80, 50, 5);
    addShipsToArr(6, "attack", "Attack Ship", 45, 52, 8);
    createShipHTML();
}

buildShips();

console.log(shipsArr)


const getRandomIndex = () => {    
    const randomIndex = Math.floor(Math.random()* shipsArr.length);    
    return randomIndex; }

fireBtn.addEventListener("click", () => {
    let hitShipIndex = getRandomIndex();
    shipsArr[hitShipIndex].hitShip(hitShipIndex);
    // checkIfGameOver();

});

// const checkIfGameOver

const resetGame = () => {
    shipsArr = []
    document.querySelector(".mothership").innerHTML = "";
    document.querySelector(".defence").innerHTML = "";
    document.querySelector(".attack").innerHTML = "";
    buildShips()
}

resetBtn.addEventListener("click", resetGame)

instructionsBtn.addEventListener("click", () => {
    instructionsModal.style.display = "block";
  })
  
closeModal.addEventListener("click", () => {
    instructionsModal.style.display = "none";
  }) 



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
