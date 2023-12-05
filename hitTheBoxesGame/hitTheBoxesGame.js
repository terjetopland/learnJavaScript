export const hitTheBoxesGame = (timeOfGame = 10) => {

    let countScore = 0;

    document.addEventListener('DOMContentLoaded', () => {
        let startHitTheBoxBtn = document.getElementById('startHitTheBoxBtn');
        let scoreStats = document.getElementById('score');
        let gameOver = document.getElementById('gameOver');
        let boxOne = document.getElementById('one');
        let hitTheBoxGame = document.getElementById('hitTheBoxGame');


        if (boxOne) {
            boxOne.style.opacity = 1;
        }

        let gameboardWidth;
        let gameboardHeight;
        if (hitTheBoxGame) {
            gameboardWidth = hitTheBoxGame.offsetWidth;
            gameboardHeight = hitTheBoxGame.offsetHeight;
        }

        let countDownStart = 3;
        let countDownFinished = false;

        const resetScore = () => {
            countDownFinished = false;
            countScore = 0;
            scoreStats.textContent = `Score: ${countScore}`;
            boxOne.classList.remove('boxOneGameFinished');
            gameOver.classList.remove('congratsAfter');
            boxOne.innerText = ``;
            console.log(countScore);
        };

        const resetFinished = () => {
            countDownFinished = false;
            gameOver.classList.add('congratsAfter');
            boxOne.classList.add('boxOneGameFinished');
            boxOne.innerText = `${countScore}`
        }

        if (startHitTheBoxBtn) {

            startHitTheBoxBtn.addEventListener('click', () => {
                resetScore();
                countDownToStart(countDownStart, () => {
                    countDownFinished = true;
                    countDownToEnd(timeOfGame, resetFinished);
                });
            });

            if (boxOne) {

                boxOne.addEventListener('click', () => {
                    if (countDownFinished) {
                        let randomLeft = getRandomInt(10, gameboardWidth-200);
                        let randomTop = getRandomInt(10, gameboardHeight-100);
                        let randomSize = getRandomInt(10, gameboardHeight-400)

                        scoreStats.textContent = `Score: ${++countScore}`;
                        boxOne.style.left = `${randomLeft}px`;
                        boxOne.style.top = `${randomTop}px`;
                        boxOne.style.width = `${randomSize}px`;
                        boxOne.style.height = `${randomSize}px`;

                    }
                });

            }
        }
    });


    const countDownToStart = (countStart, callback) => {
        let timerOnScreen = document.getElementById('startTimer');
        startHitTheBoxBtn.disabled = true;

        const timer = setInterval(() => {
            timerOnScreen.style.transition = 'opacity 0.1s'
            timerOnScreen.style.opacity = '1';
            timerOnScreen.textContent = countStart;

            if (countStart <= 0) {
                clearInterval(timer);
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

    const countDownToEnd = (countEnd, cb) => {
        let timerElement = document.getElementById('timer');
        let startHitTheBoxBtn = document.getElementById('startHitTheBoxBtn');

        const timer = setInterval(() => {
            timerElement.textContent = `Timer: ${countEnd}`;
            if (countEnd <= 0) {
                clearInterval(timer);
                timerElement.textContent = `Timer: 0`;
                startHitTheBoxBtn.disabled = false;

                cb();

            }
            countEnd--;
        }, 1000);
    }

    // function to make random integer
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

}






