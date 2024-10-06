
if (window.performance.navigation.type === 1) {
    dice();
  }


  function dice() {
    var dice1 = rollDice();
    var dice2 = rollDice();
   
    setDiceImages(dice1, dice2);
    declareWinner(dice1, dice2);
  }
   
  function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
  }
   
  function setDiceImages (num1, num2) {
    document.querySelectorAll("img")[0].setAttribute("src", "./images/dice" + num1 + ".png");
    document.querySelectorAll("img")[1].setAttribute("src", "./images/dice" + num2 + ".png");
  }
   
  function declareWinner(num1, num2) {
    if (num1 > num2) {
      document.querySelector("h1").textContent = "🥇Player 1 Wins!";
    } else if (num1 < num2) {
      document.querySelector("h1").textContent = "Player 2 Wins!🥇";
    } else {
      document.querySelector("h1").textContent = "Draw!";
    }
  }




