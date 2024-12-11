const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");
const wins = document.querySelector("#wins");
const looses = document.querySelector("#looses");
const reason = document.querySelector("#change");
const playRounds = (selected) => {
    let choice = ["rock", "paper", "scissor"]
    let randomValue = Math.random() * choice.length;
    let singleValue = Math.floor(randomValue)
    let computerChoice = choice[singleValue];
    // winning logic 
    if ((selected === "paper" && computerChoice === "rock")
        || (selected === "rock" && computerChoice === "scissor")
        || (selected === "scissor" && computerChoice === "paper")
    ) {
        wins.innerHTML = parseInt(wins.innerHTML) + 1
        reason.innerHTML = `You Win! ${selected} beat Down ${computerChoice}.`
    }
    // losing logic
    else if ((selected === "rock" && computerChoice === "paper")
        || (selected === "paper" && computerChoice === "scissor")
        || (selected === "scissor" && computerChoice === "rock")) {
        looses.innerHTML = parseInt(looses.innerHTML) + 1
        reason.innerHTML = `You Loose! ${selected} beat Down By ${computerChoice}`
    }
    //draw Logic
    else {
        // looses.innerHTML = parseInt(looses.innerHTML) + 1
        // reason.innerHTML = `You Loose! ${selected} beat Down ${computerChoice}`
        reason.innerHTML = `Match Tie , Restart Game`
    }

}
rock.addEventListener("click", () => { playRounds("rock") })
paper.addEventListener("click", () => { playRounds("paper") })
scissor.addEventListener("click", () => { playRounds("scissor") })