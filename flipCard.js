export const flipCardInOrder = () => {
    // in learnCSS add card if card is clicked
    document.addEventListener('DOMContentLoaded', () => {
        let firstCard = document.getElementById('firstCard');
        let secondCard = document.getElementById('secondCard');
        let thirdCard = document.getElementById('thirdCard');
        let scoreStats = document.getElementById('score');
        let startFlipcardGameBtn = document.getElementById('startFlipcardGameBtn');

        // initialize the cards with opacity 0
        let countScore = 0;
        let countDownFinished = false;
        let gameEnded = false;

        const resetScore = () => {
            countScore = 0;
            scoreStats.textContent = `Score: ${countScore}`;
        };

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
            startFlipcardGameBtn.addEventListener('click', () => {
                resetScore();
                
                countDownToStart(2, () => {
                    countDownFinished = true;
                    countDownToEnd(5);
                });
            })
        } else {
            return console.log('Missing one or more flipCards: firstCard? secondCard? ThirdCard?');
        }
    });
    
    const countDownToStart = (countStart, callback) => {
        let timerOnScreen = document.getElementById('countDownStartTimer');
        startFlipcardGameBtn.disabled = true;
        const timer = setInterval(() => {
            timerOnScreen.style.transition = 'opacity 0.1s'
            timerOnScreen.style.opacity = '1';
            timerOnScreen.textContent = countStart;
    
            if (countStart <= 0) {
                clearInterval(timer);
                console.log("Time's up!");
                timerOnScreen.style.opacity = '0';
                timerOnScreen.textContent = 'Go!';
                timerOnScreen.style.transition = 'opacity 2s';
                if (callback) {
                    callback();
                }
            }
            countStart--;
        }, 1000);
    };

    const countDownToEnd = (countEnd) => {
        let timerElement = document.getElementById('timer');
        let startFlipcardGameBtn = document.getElementById('startFlipcardGameBtn');
    
        const timer = setInterval(() => {
            timerElement.textContent = `Timer: ${countEnd}`;
            if (countEnd <= 0) {
                clearInterval(timer);
                timerElement.textContent = `Timer: 0`;
                startFlipcardGameBtn.disabled = false;
                countDownFinished = false;
            }
            countEnd--;
        }, 1000);
    }
}






