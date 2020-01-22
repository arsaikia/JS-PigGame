/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// Define Required variables
var scores, roundScore, activePlayer, dice, gamePlaying, previousDice;

// Initialize the base value for both the players
init();

document.querySelector('.btn-roll').addEventListener('click', function () {
	if (gamePlaying) {
		// Random number
		dice = Math.floor(Math.random() * 6) + 1;

		// Display the result
		var diceDOM = document.querySelector('.dice');
		diceDOM.src = 'dice-' + dice + '.png';
		diceDOM.style.display = 'block';

		// Add to total if rolled !== 1

		if (dice === 6 && previousDice === 6) {
			scores[activePlayer] = 0;
			document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
			nextPlayer();
		}

		if (dice !== 1) {
			// if current dice AND previous == 6, set everything to 0, elseAdd Score

			roundScore += dice;
			document.querySelector('#current-' + activePlayer).textContent = roundScore;

			previousDice = dice;
		}
		else {
			// Go to next player
			nextPlayer();
		}
	}
});

document.querySelector('.btn-hold').addEventListener('click', function () {
	if (gamePlaying) {
		// Add Current Score to total Score
		scores[activePlayer] += roundScore;

		// Update the UI
		document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
		var winningPoints = 50;
		var winningValue = document.querySelector('.final-score').value;
		if (winningValue) {
			winningPoints = winningValue;
		}
		// Check if player won the game
		if (scores[activePlayer] >= winningPoints) {
			document.getElementById('name-' + activePlayer).textContent = 'Winner !';
			document.getElementsByClassName('dice')[0].style.display = 'none';
			document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
			document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
			gamePlaying = false;
		}
		else {
			nextPlayer();
		}
	}
});

function nextPlayer () {
	activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
	roundScore = 0;
	previousDice = 0;

	document.getElementById('current-0').textContent = 0;
	document.getElementById('current-1').textContent = 0;

	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');

	document.getElementsByClassName('dice')[0].style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init () {
	// Initialze the variables with start values
	scores = [ 0, 0 ];
	roundScore = 0;
	activePlayer = 0;
	gamePlaying = true;
	previousDice = 0;

	document.getElementsByClassName('dice')[0].style.display = 'none';

	document.getElementById('score-0').textContent = 0;
	document.getElementById('score-1').textContent = 0;
	document.getElementById('current-0').textContent = 0;
	document.getElementById('current-1').textContent = 0;
	document.getElementById('name-0').textContent = 'Player 1';
	document.getElementById('name-1').textContent = 'Player 2';
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active');
}
