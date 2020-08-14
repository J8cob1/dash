//Code from previous project found at:
//https://github.com/jacobmcollins/GeoBarista

// These are the default options for all apps
//[task, command]
const quote = ["QuoteOfTheDay", false];
const weather = ["Weather", false];
const cal = ["Calendar", false];
const news = ["news", false];
const mail = ["mail", false];
const welcomeBackground = ["welcomeBackground", true];
const movingBackground = ["movingBackground", false];

//retreive current options for a specific task
function getLocStorage(toRetreive) {
    return localStorage.getItem(toRetreive[0]);
}

function setLocStorage(toSet, data) {
    try {
        localStorage.setItem(toSet[0], data);
        return true;
    }
    catch(err) {
        console.error(err.message);
        console.error("StatePersist.js - setLocStorage()");
        return false;
    }
}

//export constants for other functions to be able to access the options
export {getLocStorage, setLocStorage, quote, weather, cal, mail, news, welcomeBackground, movingBackground};