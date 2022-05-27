const motherShip = document.querySelector("#mother-ship");
const defenceShip = document.querySelector(".defence-ship");
const attackShip = document.querySelector(".attack-ship");

let shipArr = [];

    // method for adding ships to html page
const renderShip = (shipType, numberOfShips) => {
    for (let index = 0; index < numberOfShips; index++) {
        if (shipType === motherShip){
            shipArr.push("motherShip")
            let totalPoints = 100;
            shipType.innerHTML += `<div class="ship" id="${shipType}"><h3>Mother Ship</h3><p>${totalPoints}</p></div>`
        } else if (shipType === defenceShip){
            shipArr.push("defenceShip")
            let totalPoints = 80;
            shipType.innerHTML += `<div class="ship" id="${shipType}"><h4>Defence Ship</h4><p>${totalPoints}</p></div>`
        } else if (shipType === attackShip) {
            shipArr.push("attackShip")
            let totalPoints = 45;
            shipType.innerHTML += `<div class="ship" id="${shipType}"><h4>Attack Ship</h4><p>${totalPoints}</p></div>`
        }
    };
}
// calling ships ie rendership (mothership, 1)
renderShip(motherShip, 1);
renderShip(defenceShip, 5)
renderShip(attackShip, 8)
// console.log(renderShip(defenceShip, 10))
// console.log(renderShip)

class Ship {
    constructor(hitPoints, totalPoints) {
        this.hitPoints = hitPoints;
        this.totalPoints = totalPoints;
    }

    // extend class for hit type. parameteres: starting points, loss increment.

    // METHOD for randomly selecting a ship
    // cannont be a ship that has 0 totalPoints

    // from mastermind
    // for (let i = 0; i < 4; i++) {
    //     const randomIndex = Math.floor(Math.random() * possibleColours.length);
    //     const randomColour = possibleColours[randomIndex];
    //     possibleColours.splice(randomIndex, 1)
    //     winningCombination.push(randomColour);
    //   }

    //METHOD  for decreasing value of ship when hit
    // will need to recognise the hit points and decrease total points
    // if mothership hit points go to zero
    //update innder html of ship points 

    getTargetShip = () => {
        const randomIndex = Math.floor(Math.random) * shipArr.length;
        const randomShip = shipArr[randomIndex];
        shipArr.splice(randomIndex, 1)
        targetShip.push(randomShip)
     };

   

    // getShip = () => {
    //    const randomShip = Math.random() * shipArr.length;
    // }

}
console.log(targetShip)

console.log(shipArr)

// class MotherShipClass extends Ship {
//     constructor (hitPoints, totalPoints)
//     super(hitPoints, totalPoints)
// } 

// class DefenceShipClass extends Ship {
//     constructor (hitPoints, totalPoints)
//     super(hitPoints, totalPoints)
// } 

// class AttackShipClass extends Ship {
//     constructor (hitPoints, totalPoints)
//     super(hitPoints, totalPoints)
// } 



//Insturctions button and plya again
// Winning modal 
// BUTTON - ON CLICK HIT A RANDOM SHIP 
