

const Game = {
    countdownFrom: 3,
    /*countdownGo: "Go!"*/
};

const Countdown = {
    displayHtmlId: 'countdown-display',
    displayElement() { return document.getElementById(this.displayHtmlId) },
    setDisplayValue(val) {
        const el = this.displayElement();
        el.textContent = val;
    },
}

const displayHandler = (updateGuiFunc) => ({
    get(target, prop, receiver) {
        return Reflect.get(...arguments);
    },
    set(target, prop, value) {
        if(prop === 'countdownFrom') {
            // func som oppdaterer gui
            updateGuiFunc(value);
            if( value === 0 ) {
                console.log('Countdown finished!');
            }
        }

        target[prop] = value;
        return true;
    }
});

const countdownObject = Object.create(Countdown);


const proxy3 = new Proxy(Game, displayHandler(countdownObject.setDisplayValue));

const countdownInterval = setInterval(function() {
    if(proxy3.countdownFrom === 0) {
        clearInterval(countdownInterval);
        return;
    }
    proxy3.countdownFrom--;
    console.log('countDownFrom', proxy3.countdownFrom)

},500);

// save html element in a variable



