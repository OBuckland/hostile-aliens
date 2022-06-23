# **Hostile Aliens**
***

### **Description**
This game is loosely based on the Space Invaders arcade game. The game has been built using an OOP approach and unit tested using Jest. The player presses the fire button to randomly hit one of the ships. There are 3 types of ships: mothership, defence ship and attack ship. The game is won when either the mothership is destroyed or all ships reach zero points.


---
| **Table of contents** |
|---|
| Technology  |
| Skills |
| Functionality |
| Images |
| Testing |
| Links |


### **Technology**
*   JavaScript
*   HTML
*   CSS
*   Git & GitHub
*   Jest

### **Skills**
*   OOP
*   Unit testing

### **Functionality**
* There is 1 mothership, 5 defence ships and 8 attack ships. Each ship starts with a different amount of points and is dealt damage based on ship type.
* When the player presses the fire button a random ship is hit.
* Once a ship is destroyed the ship will change colour and the points will go down to 0. Once destroyed a ship cannot be fired at again.
* There is an information modal showing how to play instructions.
* A replay icon is on the main page to reset the game.
* When the player wins a modal pops and gives the player the option of playing again. 


### **Images**
<img src="/images/home-screen-screenshot.png" alt="Image of game home page" width="600px">
<img src="/images/ships-hit-screenshot.png" alt="Image of game when ships hit" width="600px">
<img src="/images/how-to-play-screenshot.png" alt="Image of how to play modal" width="600px">
<img src="/images/winning-modal-screenshot.png" alt="Image of winning modal" width="600px">

### **Testing**
The game was tested using Jest. The tests check that for each ship type, the ships are build correctly, assigned the correct names and values, and that they loose the correct number of points when hit. The method to select a random ship has also been tested.  

### **Links**
[GitHub repository](https://github.com/OBuckland/hostile-aliens "Link to GitHub")

[Play Hostile Aliens](https://obuckland.github.io/hostile-aliens/ "Link to Game")
