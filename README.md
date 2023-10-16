# Memory Game

This project is a simple memory game built with JavaScript, HTML, and CSS. The game board consists of 16 cards arranged in a grid. The deck is made up of eight different pairs of cards, each with different images on one side. The cards are shuffled on the grid with the image side down. The gameplay rules are very simple: flip over two hidden cards at a time to locate the ones that match!

## Features

- The game randomly shuffles the cards. A user wins once all cards have successfully been matched.
- For each turn:
  - The user flips one card over to reveal its underlying image.
  - The user then turns over a second card, trying to find the corresponding card with the same image.
  - If the cards match, both cards stay flipped over.
  - If the cards do not match, they are flipped face down.
- The game shows the current number of moves a user has made.
- The game shows a timer with the elapsed time.
- The game shows the user's best score and best time.
- The user can restart the game at any moment by clicking on the restart button.

## How to Run

To run this project, you need to have a web browser. Open the HTML file in your browser to start the game.

## How to Play

- Click on a card to reveal its image.
- Click on another card to try and find the matching image.
- If the images match, the cards will stay flipped over.
- If the images don't match, the cards will flip back over.
- Try to remember these images as it becomes easier to match pairs the longer you play.
- Your game ends once you've successfully matched all pairs. You can choose to play again.

## Future Improvements

- Add different difficulty levels (e.g., increase the number of cards on the grid).
- Add a leaderboard to keep track of high scores for users.
- Add more interactive elements, like sound effects and animations.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.
