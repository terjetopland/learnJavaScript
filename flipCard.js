export const flipCardInOrder = () => {
    // in learnCSS add card if card is clicked
    document.addEventListener('DOMContentLoaded', () => {
        let firstCard = document.getElementById('firstCard');
        let secondCard = document.getElementById('secondCard');
        let thirdCard = document.getElementById('thirdCard');
        let scoreStats = document.getElementById('score');
        
        // initialize the cards with opacity 0
        let count = 0;

        countDownToStart();
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

                        count++
                        scoreStats.textContent = `Score: ${count}`
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

                        count++;
                        scoreStats.textContent = `Score: ${count}`
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

                        count++
                        scoreStats.textContent = `Score: ${count}`

                        let frontText = firstCard.querySelector('.flipCardFront > div');
                        frontText.textContent = `You found me again!\nCount: ${count}`;

                    }
                });
            }
            


        } else { return console.log('Missing one or more flipCards: firstCard? secondCard? ThirdCard?');}
    });
}

const countDownToStart = () => {
    let countDownSecondsNow = new Date().getSeconds() + 5;
    let startFlipcardGameBtn = document.getElementById('startFlipcardGameBtn');
    let countDownStartTimer = document.getElementById('countDownStartTimer');

    console.log('here')
    const countDown = (timeBeforeStop) => {
        let timeNow = new Date().getSeconds();
            timeNow = new Date().getSeconds();
            console.log(timeBeforeStop - timeNow)
            return timeBeforeStop - timeNow;  
    }

    
        startFlipcardGameBtn.addEventListener('click', () => {
            
            countDownStartTimer.textContent =
            countDownStartTimer.style.opacity = '1';
            countDownStartTimer.textContent = `${countDown(countDownSecondsNow)}`
        })
    
    
}