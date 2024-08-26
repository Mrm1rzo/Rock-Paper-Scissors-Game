const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

const score = document.querySelector(".score");
const yourScore = document.querySelector(".your-score");
const compScore = document.querySelector(".comp-score");

let array = ["rock", "paper", "scissors"];
let yourSelect;
let compSelect;
let yourCount = 0;
let compCount = 0;

function clickBtn() {
  let randomArray = Math.ceil(Math.random() * array.length - 1);
  compSelect = array[randomArray];
  console.log(yourSelect);
  console.log(compSelect);

  if (yourSelect == compSelect) {
    score.textContent = "It's a tie!";
  } else {
    score.textContent = " ";
  }

  if (
    (yourSelect == "rock" && compSelect == "scissors") ||
    (yourSelect == "paper" && compSelect == "rock") ||
    (yourSelect == "scissors" && compSelect == "paper")
  ) {
    yourCount += 1;
  } else if (
    (yourSelect == "rock" && compSelect == "paper") ||
    (yourSelect == "paper" && compSelect == "scissors") ||
    (yourSelect == "scissors" && compSelect == "rock")
  ) {
    compCount += 1;
  }
  yourScore.textContent = `${yourCount} | ${yourSelect}`;
  compScore.textContent = `${compCount} | ${compSelect}`;
}

rock.addEventListener("click", (e) => {
  yourSelect = "rock";
  clickBtn();
});

paper.addEventListener("click", (e) => {
  yourSelect = "paper";
  clickBtn();
});

scissors.addEventListener("click", (e) => {
  yourSelect = "scissors";
  clickBtn();
});
