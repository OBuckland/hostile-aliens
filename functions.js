export class Ship {
    constructor(shipType, shipName, totalPoints, attackDamage) {
        this.totalPoints = totalPoints;
        this.attackDamage = attackDamage;
        this.shipType = shipType;
        this.shipName = shipName;
    }

    // when ship is hit 
    hitShip() {
        this.totalPoints -= this.attackDamage;
        if ((this.totalPoints <= 0)) {
            this.totalPoints = 0;
        } 
    }
}