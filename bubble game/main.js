let score = 0;
let intervalId;
let isGameRunning = false;
let bubbleSpeeds = {
  easy: 1500,
  normal: 1000,
  hard: 500
};

document.getElementById("start-btn").addEventListener("click", startGame);
document.getElementById("stop-btn").addEventListener("click", stopGame);
document.getElementById("reset-btn").addEventListener("click", resetGame);

function startGame() {
  if (isGameRunning) return;
  isGameRunning = true;
  intervalId = setInterval(createBubble, bubbleSpeeds.normal);
}

function stopGame() {
  clearInterval(intervalId);
  isGameRunning = false;
  document.getElementById("game-area").style.backgroundColor = "violet";
}

function resetGame() {
  clearInterval(intervalId);
  isGameRunning = false;
  score = 0;
  document.getElementById("score").textContent = score;
  document.getElementById("game-area").style.backgroundColor = "transparent";
  document.getElementById("game-area").innerHTML = "";
}

function createBubble() {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble");
  bubble.style.top = Math.random() * 250 + "px";
  bubble.style.left = Math.random() * 350 + "px";
  bubble.addEventListener("click", () => {
    if (!isGameRunning) return;
    bubble.remove();
    score++;
    document.getElementById("score").textContent = score;
  });
  document.getElementById("game-area").appendChild(bubble);
}
 