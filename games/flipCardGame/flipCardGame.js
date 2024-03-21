export const flipCardInOrder = (timeOfGame = 10) => {

    let countScore = 0;

    document.addEventListener('DOMContentLoaded', () => {
        let startFlipcardGameBtn = document.getElementById('startFlipcardGameBtn');
        let firstCard = document.getElementById('firstCard');
        let secondCard = document.getElementById('secondCard');
        let thirdCard = document.getElementById('thirdCard');
        let scoreboard = document.getElementById('scoreboard-scoreContainer');
        let scoreStats = document.getElementById('score');
        let gameOver = document.getElementById('gameOver');



        let countDownStart = 3;
        let countDownFinished = false;

        const resetScore = () => {
            countDownFinished = false;
            countScore = 0;
            scoreStats.textContent = `Score: ${countScore}`;
            scoreStats.classList.remove('scoreboard-congratsAfter');
            gameOver.classList.remove('scoreboard-congratsAfter');
        };

        const resetFinished = () => {
            countDownFinished = false;
            scoreStats.classList.add('scoreboard-congratsAfter');
            gameOver.classList.add('scoreboard-congratsAfter');
        }

        if (firstCard) {
            firstCard.style.opacity = '1';
            firstCard.style.cursor = 'pointer';
        }

        if (startFlipcardGameBtn) {
            startFlipcardGameBtn.addEventListener('click', () => {

                resetScore();

                if (firstCard && secondCard && thirdCard) {
                    firstCard.style.opacity = '1';
                    firstCard.style.cursor = 'pointer';
                    secondCard.style.opacity = '0';
                    thirdCard.style.opacity = '0';

                    if (secondCard) {
                        firstCard.addEventListener('click', () => {
                            if (secondCard.style.opacity < '1' && firstCard.style.opacity > '0') {
                                secondCard.style.cursor = 'pointer';
                                secondCard.style.opacity = '1';
                                firstCard.style.opacity = '0';
                                firstCard.style.cursor = 'default';

                                if (countDownFinished) {
                                    scoreStats.textContent = `Score: ${++countScore}`
                                }
                            }
                        });

                        secondCard.addEventListener('click', () => {
                            if (secondCard.style.opacity > '0') {
                                secondCard.style.cursor = 'default';
                                secondCard.style.opacity = '0';
                                if (thirdCard.style.opacity < '1') {
                                    thirdCard.style.cursor = 'pointer';
                                    thirdCard.style.opacity = '1';
                                }

                                if (countDownFinished) {
                                    scoreStats.textContent = `Score: ${++countScore}`
                                }
                            }
                        });
                    }

                    if (thirdCard) {
                        thirdCard.addEventListener('click', () => {
                            if (thirdCard.style.opacity > '0') {
                                thirdCard.style.cursor = 'default';
                                thirdCard.style.opacity = '0';
                                firstCard.style.cursor = 'pointer';
                                firstCard.style.opacity = '1';

                                if (countDownFinished) {
                                    scoreStats.textContent = `Score: ${++countScore}`
                                }

                                let frontText = firstCard.querySelector('.flipCardFront > div');
                                frontText.textContent = `You found me again!\nCount: ${countScore}`;
                            }
                        });
                    }
                    // resetScore();
                    countDownToStart(countDownStart, scoreboard.id, startFlipcardGameBtn, () => {
                        countDownFinished = true;
                        countDownToEnd(timeOfGame, 'timer', 'startFlipcardGameBtn', resetFinished);
                    });

                } else {
                    return console.log('Missing one or more flipCards: firstCard? secondCard? ThirdCard?');
                }
            });
        }
    })


    const countDownToStart = (countDownToStart = 3, parentElementId, startBtn, callback) => {
        console.log('here')
            
            const parentElement = document.getElementById(parentElementId);
            if (!parentElement) {
                console.error(`Couldn't find parent element with id ${parentElementId} when using countDownToStart function!!`);
            }

            const timerOnScreen = document.createElement("div");
            timerOnScreen.id = 'startTimer';
            timerOnScreen.classList.add('scoreboard-startTimer');
            parentElement.appendChild(timerOnScreen);
            console.log(timerOnScreen)

            startBtn.disabled = true;

            const timer = setInterval(() => {
                timerOnScreen.style.transition = 'opacity 0.1s'
                timerOnScreen.style.opacity = '1';
                timerOnScreen.textContent = countDownToStart;

                if (countDownToStart <= 0) {
                    clearInterval(timer);
                    timerOnScreen.style.opacity = '0';
                    timerOnScreen.textContent = 'Go!';
                    timerOnScreen.style.transition = 'opacity 2s';
                    if (callback) {
                        callback();
                    }
                }
                countDownToStart--;
            }, 1000);
        
    };

    const countDownToEnd = (countEnd = '10', timerElementId = 'timer', startGameBtnId = 'startGame', cb) => {
        let timerElement = document.getElementById(timerElementId);
        let startGameBtn = document.getElementById(startGameBtnId);

        const timer = setInterval(() => {
            timerElement.textContent = `Timer: ${countEnd}`;
            if (countEnd <= 0) {
                clearInterval(timer);
                timerElement.textContent = `Timer: 0`;
                startGameBtn.disabled = false;

                cb();

            }
            countEnd--;
        }, 1000);
    }


}






