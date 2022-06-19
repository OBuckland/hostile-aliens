const motherShipSection = document.querySelector("#mother-ship");
const defenceShipSection = document.querySelector(".defence-ship");
const attackShipSection = document.querySelector(".attack-ship");
const fireBtn = document.querySelector("#fire-btn")
const resetBtn = document.querySelector("#reset-btn");
const instructionsBtn = document.querySelector("#instructions-btn")

let shipsArr = [];
let randomShip = "";
let shipsInPlayArr = [];

class Ship {
    constructor(totalPoints, attackDamage, shipType, shipName) {
        this.totalPoints = totalPoints;
        this.attackDamage = attackDamage;
        this.shipType = shipType;
        this.shipName = shipName;
    }

    hitShip(index) {
        this.totalPoints -= this.attackDamage;
        if (this.totalPoints < 0) this.totalPoints = 0;
        document.querySelector(`${this.shipType}${index}`).innerHTML = `<h5>${this.shipName}</h5> <p>Points: ${this.totalPoints}</p>`;
        if ((this.totalPoints === 0)) {
            // document.querySelector(`#${this.shipType}${index}`).classList.add("ship--destroyed");
            // ADD CLASS HERE
            document.querySelector(`#${this.shipType}${index}`).classList.add("ship-destroyed");
            shipsInPlay.splice(index);
        } 
    }

    // buildShip(numberOfShips){
    //     for (let index = 0; index < numberOfShips; index++) {
    //         shipArr.push(`${this.shipType}${index}`);
    //         document.querySelector(`.${this.shipType}`).innerHTML += `<p class="ship" id="${this.shipType}${index}">${this.shipName} ${this.totalPoints} Points</p>`
    //     };
    // }
    

}

const buildShips = (indexStart, shipType, shipName, totalPoints, attackDamage, numberOfShips) => {
    for (let index = indexStart; index < (indexStart + numberOfShips); index++) {
        shipsArr.push(new Ship(shipType, shipName, totalPoints, attackDamage));
        document.querySelector(`.${shipType}`).innerHTML += `<div class=“ship” id=“${shipType}${index}“><h5>${shipName}</h5> 
        <p>Points: ${totalPoints}</p></div>`;
    }    
}


const startGame = () => {
    buildShips(0, "mothership", "Mother Ship", 100, 50, 1);
    buildShips(1, "defence", "Defence Ship", 80, 50, 5);
    buildShips(6, "attack", "Attack Ship", 45, 50, 8);
    shipsInPlay = [...shipsArr];
}

startGame();

// const motherShip = new Ship (100, 9, "mothership", "Mother Ship");
// const defenceShip = new Ship (80, 10, "defence", "Defence Ship");
// const attackShip = new Ship (45, 12, "attack", "Attack Ship");

// motherShip.buildShip(1);
// defenceShip.buildShip(5);
// attackShip.buildShip(8);



// get random index - then to into ships array
getRandomShip = () => {
    const randomIndex = Math.floor(Math.random() * shipsArr.length);
    const randomShip = shipsArr[randomIndex];
    return randomShip;
     };

fireBtn.addEventListener("click", () => {
    let hitShipIndex = getRandomShip();
    shipsInPlay[hitShipIndex].hitShip(hitShipIndex);
    // checkPoints();

});

const instructionsModal = document.querySelector("#instructions-modal");
const closeModal = document.querySelector(".close-modal")

instructionsBtn.addEventListener("click", () => {
    instructionsModal.style.display = "block";
  })
  
closeModal.addEventListener("click", () => {
    instructionsModal.style.display = "none";
  }) 
  


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
