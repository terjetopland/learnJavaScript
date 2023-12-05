export const hitTheBoxesGame = () => {

    let countScore = 0;

    // function to make random integer
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1));
    }

    document.addEventListener('DOMContentLoaded', () => {
        let startHitTheBoxBtn = document.getElementById('startHitTheBoxBtn');
        let scoreStats = document.getElementById('score');
        let gameOver = document.getElementById('gameOver');

        let hitTheBoxesGame = document.getElementById('hitTheBoxGame');
        let boxOne = document.getElementById('one');



        let timeOfGame = 10;
        let countDownStart = 3;
        let countDownFinished = false;

        const resetScore = () => {
            countDownFinished = false;
            countScore = 0;
            scoreStats.textContent = `Score: ${countScore}`;
            scoreStats.classList.remove('congratsAfter');
            gameOver.classList.remove('congratsAfter');
        };

        const resetFinished = () => {
            countDownFinished = false;
            scoreStats.classList.add('congratsAfter');
            gameOver.classList.add('congratsAfter');
        }


        startHitTheBoxBtn.addEventListener('click', () => {

            resetScore();

            
                boxOne.addEventListener('click', () => {
                    if(countDownFinished) {
                        scoreStats.textContent = `Score: ${++countScore}`
                    }                    
                })

            

            // resetScore();
            countDownToStart(countDownStart, () => {
                countDownFinished = true;
                countDownToEnd(timeOfGame, resetFinished);
            });
        });
    })


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
        console.timeEnd()
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


}






