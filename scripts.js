// Predefined set of colors
const colors = [
    "#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#A133FF", "#33FFF5"
  ];
  
  // DOM Elements
  const colorBox = document.querySelector('[data-testid="colorBox"]');
  const colorOptions = document.querySelectorAll('[data-testid="colorOption"]');
  const gameStatus = document.querySelector('[data-testid="gameStatus"]');
  const scoreElement = document.querySelector('[data-testid="score"]');
  const newGameButton = document.querySelector('[data-testid="newGameButton"]');
  
  let targetColor;
  let score = 0;
  
  // Initialize the game
  function initGame() {
    // Randomly select a target color
    targetColor = colors[Math.floor(Math.random() * colors.length)];
    colorBox.style.backgroundColor = targetColor;
  
    // Assign random colors to the buttons
    colorOptions.forEach((button, index) => {
      button.style.backgroundColor = colors[index];
    });
  
    // Reset game status
    gameStatus.textContent = "";
  }
  
  // Check if the selected color is correct
  function checkGuess(event) {
    const selectedColor = event.target.style.backgroundColor;
    if (selectedColor === targetColor) {
      gameStatus.textContent = "Correct!";
      gameStatus.style.color = "green";
      score++;
      scoreElement.textContent = `Score: ${score}`;
      setTimeout(initGame, 1000); // Start a new round after 1 second
    } else {
      gameStatus.textContent = "Wrong! Try again.";
      gameStatus.style.color = "red";
    }
  }
  
  // Reset the game
  function resetGame() {
    score = 0;
    scoreElement.textContent = `Score: ${score}`;
    initGame();
  }
  
  // Event Listeners
  colorOptions.forEach(button => {
    button.addEventListener("click", checkGuess);
  });
  
  newGameButton.addEventListener("click", resetGame);
  
  // Start the game
  initGame();
