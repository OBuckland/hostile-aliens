import {Ship, getRandomIndex} from "./functions.js"

const mothership = new Ship ("mothership", "Mother Ship", 100, 9);
const defenceShip = new Ship ("defence", "Defence Ship", 80, 10);
const attackShip = new Ship ("attack", "Attack Ship", 45, 12);
const shipsArr = [{shipType: "mothership", shipName: "Mother Ship", totalPoints: 100, attackDamage: 9}, {shipType: "defence", shipName: "Defence Ship", totalPoints: 80, attackDamage: 10}, {shipType: "attack", shipName: "Attack Ship", totalPoints: 45, attackDamage: 12}]

// Test ships built correctly
it ("Should create a new Mother Ship, with the correct parameters", () => {
    expect(mothership).toEqual({shipType: "mothership", shipName: "Mother Ship", totalPoints: 100, attackDamage: 9})
}),

it ("Should create a new Defence Ship, with the correct parameters", () => {
    expect(defenceShip).toEqual({shipType: "defence", shipName: "Defence Ship", totalPoints: 80, attackDamage: 10})
}),

it ("Should create a new Attack Ship, with the correct parameters", () => {
    expect(attackShip).toEqual({shipType: "attack", shipName: "Attack Ship", totalPoints: 45, attackDamage: 12})
}),

// Test ships loose correct number of points
it ("Should reduce total points by correct amount for Mother Ship", () => {
   mothership.hitShip()
    expect(mothership.totalPoints).toBe(91);
})

it ("Should reduce total points by correct amount for Defence Ship", () => {
    defenceShip.hitShip()
    expect(defenceShip.totalPoints).toBe(70);
})

it ("Should reduce total points by correct amount for Attack Ship", () => {
    attackShip.hitShip()
    expect(attackShip.totalPoints).toBe(33);
})

// Test ship array randomiser 
it ("Should return a number", () => {
    expect( typeof(getRandomIndex(shipsArr))).toBe("number");
})

it ("Should be that the getRadomIndex function returns a number greater than or equal to 0", () => {
    expect(getRandomIndex(shipsArr)).toBeGreaterThan(-1);
})

it ("Should that the getRadomIndex function returns a number less than or equal to length of array", () => {
    expect(getRandomIndex(shipsArr)).toBeLessThan(shipsArr.length);
})