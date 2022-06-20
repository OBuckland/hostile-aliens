// ships are built correctly ie type,name,points. For each ship.

// what happens when they get hit. 

import {addShipsToArr} from "./functions.js";
// //can use it or this, this work the same way, first parameter is a string that show what the test is doing.
// //second parameter is a call back function, telling it what to do to test it
it("A ship should be created from ship class with parameters: shipType, shipName, totalPoints, attackDamage and added to the ships array", () => {   
     const addShipToArray = buildShips(0, "mothership", "Mother Ship", 100, 9, 1);    
     expect(ships[0]).toBe({shipType: "mothership", shipName: "Mother Ship", totalPoints: 100, attackDamage: 9})
    })