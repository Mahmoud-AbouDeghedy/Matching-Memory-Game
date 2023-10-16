"use strict";
const cards = document.querySelectorAll(".card");
const imgsContainer = document.querySelectorAll(".element");
const imgs = document.querySelectorAll(".element img");
const restartBtn = document.querySelector("button");
const numberOfMoves = document.querySelector(".moves");
const bestScore = document.querySelector(".best--score");
const bestTime = document.querySelector(".best--time");
const time = document.querySelector(".time");
const totalTime = document.querySelector(".tot-time");
const totalMoves = document.querySelector(".tot-moves");
const done = document.querySelector(".done");
const again = document.querySelector(".again");

let activeCard,
	numberOfActiveCards = 0,
	solved = 0,
	moves = 0,
	best = -1,
	best_Time = -1,
	intervalId = null,
	elapsedTime = null;

const startTimer = () => {
	if (intervalId) {
		clearInterval(intervalId);
	}

	elapsedTime = 0;

	time.textContent = elapsedTime;

	intervalId = setInterval(() => {
		elapsedTime++;

		time.textContent = elapsedTime;
	}, 1000);
};

const updateMoves = (moves) => {
	numberOfMoves.textContent = moves;
};

const generateRandomimgs = () => {
	let arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
	arr = arr.sort(() => Math.random() - 0.5);
	for (let i = 0; i < 16; i++) {
		imgs[i].src = `css/imgs/${arr[i]}.jpg`;
	}
};
const init = () => {
	generateRandomimgs();
	imgsContainer.forEach((img) => {
		img.style.opacity = 0;
		img.style.transform = "translate(-50%, -50%) rotateY(-180deg)";
	});
	cards.forEach((card) => {
		card.style.transform = " translate(-50%, -50%) rotateY(180deg)";
	});

	startTimer();

	numberOfMoves.textContent = "0";
	solved = 0;
	if (best === -1) {
		bestScore.textContent = "";
	} else bestScore.textContent = best;

	if (best_Time === -1) {
		bestTime.textContent = "";
	} else bestTime.textContent = best_Time;

	done.classList.add("hidden");
	moves = 0;
};

restartBtn.addEventListener("click", () => {
	init();
});
init();
cards.forEach((card) =>
	card.addEventListener("click", (e) => {
		if (Number(card.children[0].style.opacity) === 0) {
			card.style.transform = " translate(-50%, -50%) rotateY(-180deg)";
			card.children[0].style.transform =
				"translate(-50%, -50%) rotateY(-180deg)";
			card.children[0].style.opacity = 1;
			moves++;
			numberOfActiveCards++;
			updateMoves(moves);
			if (numberOfActiveCards === 1) activeCard = card;
			else {
				numberOfActiveCards = 0;
				if (
					activeCard.children[0].children[0].src ===
					card.children[0].children[0].src
				) {
					activeCard.children[0].style.opacity = "50%";
					card.children[0].style.opacity = "50%";
					solved++;
				} else {
					setTimeout(() => {
						card.style.transform = " translate(-50%, -50%) rotateY(180deg)";
						card.children[0].style.transform =
							"translate(-50%, -50%) rotateY(-180deg)";
						card.children[0].style.opacity = 0;
						activeCard.style.transform =
							" translate(-50%, -50%) rotateY(180deg)";
						activeCard.children[0].style.transform =
							"translate(-50%, -50%) rotateY(-180deg)";
						activeCard.children[0].style.opacity = 0;
					}, 600);
				}
			}
			if (solved === 8) {
				solved = 0;
				clearInterval(intervalId);
				if (best === -1 || moves < best) {
					best = moves;
				}

				if (best_Time === -1 || elapsedTime < best_Time)
					best_Time = elapsedTime;

				totalMoves.textContent = moves;
				totalTime.textContent = elapsedTime;
				setTimeout(() => {
					done.classList.remove("hidden");
				}, 500);
				again.addEventListener("click", init);
			}
		}
	})
);
