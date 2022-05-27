const motherShipSection = document.querySelector("#mother-ship");
const defenceShipSection = document.querySelector(".defence-ship");
const attackShipSection = document.querySelector(".attack-ship");
const fireBtn = document.querySelector("#fire-btn")

let shipArr = [];

class Ship {
    constructor(totalPoints, attackDamage, shipType, shipName) {
        this.totalPoints = totalPoints;
        this.attackDamage = attackDamage;
        this.shipType = shipType;
        this.shipName = shipName;
    }

    buildShip(numberOfShips){
        for (let index = 0; index < numberOfShips; index++) {
            shipArr.push(this.shipType);
            document.querySelector(`.${this.shipType}`).innerHTML += `<div class="ship" id="${this.shipType}${index}"><h3>${this.shipName}</h3><p>${this.totalPoints}</p></div>`
        };
    }

    hitShip () {
        this.totalPoints -= this.hitPoints;
// add reomve from array once points 0
// if on this hit mother ship poitns = 0 you win
    }
}

const motherShip = new Ship (100, 9, "mothership", "Mother Ship");
const defenceShip = new Ship (80, 10, "defence", "Defence Ship");
const attackShip = new Ship (45, 12, "attack", "Attack Ship");

motherShip.buildShip(1);
defenceShip.buildShip(5);
attackShip.buildShip(8);


    // method for adding ships to html page
// const renderShip = (shipType, numberOfShips) => {
//     for (let index = 0; index < numberOfShips; index++) {
//         if (shipType === "motherShip"){
//             shipArr.push("motherShip")
//             let totalPoints = 100;
//             motherShipSection.innerHTML += `<div class="ship" id="${shipType}${index}"><h3>Mother Ship</h3><p>${totalPoints}</p></div>`
//         } else if (shipType === "defenceShip"){
//             shipArr.push("defenceShip")
//             let totalPoints = 80;
//             defenceShipSection.innerHTML += `<div class="ship" id="${shipType}${index}"><h4>Defence Ship</h4><p>${totalPoints}</p></div>`
//         } else if (shipType === "attackShip") {
//             shipArr.push("attackShip")
//             let totalPoints = 45;
//             attackShipSection.innerHTML += `<div class="ship" id="${shipType}${index}"><h4>Attack Ship</h4><p>${totalPoints}</p></div>`
//         }
//     };
// }
// calling ships ie rendership (mothership, 1)
// renderShip("motherShip", 1);
// renderShip("defenceShip", 5);
// renderShip("attackShip", 8);




console.log(shipArr)


getRandomShip = () => {
    const randomIndex = Math.floor(Math.random) * shipArr.length;
    const randomShip = shipArr[randomIndex];
    return randomShip;
     };

fireBtn.addEventListener("click", getRandomShip);


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
