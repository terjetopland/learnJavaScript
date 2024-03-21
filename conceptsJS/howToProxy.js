
// Working to figure out how proxy works

export const howToProxy = () => {
    // Create an empty object
    const gameSettings = {}

    // Make a new proxy
    const gameSettingsProxy = new Proxy(gameSettings, {
        // make a getter
        get: (targetObject, property) => {
            // return the property if the property exists
            return property in targetObject ? targetObject[property] : "no poroperty of such a name!";
        },

        //make a setter
        set: (targetObject, property, value) => {

            return targetObject[property] = value;
            
        }
    })

    gameSettingsProxy.difficulty = "easy";
    console.log(gameSettingsProxy.difficulty);
    
}



