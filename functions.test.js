import {Ship} from "./functions.js"

it ("Should create a new instance of the class ship, with the correct parameters", () => {
    const mothership = new Ship ("mothership", "Mother Ship", 100, 9);
    expect(mothership).toEqual({shipType: "mothership", shipName: "Mother Ship", totalPoints: 100, attackDamage: 9})
}),

it ("Should reduce total points by correct amount", () => {
    const attackShip = new Ship ("atttackShip", "Attack Ship", 45, 12);
    attackShip.hitShip()
    expect(attackShip.totalPoints).toBe(33);
})
