// A script to run before npm start and npm build

// For the Calendar API: create apiGoogleConfig.json file
// requires.env or environment variables to setup
let fs = require('fs');

// Read in environment variables
let calendarAPIKey = process.env.REACT_GOOGLE_CALENDAR_CLIENT_ID;
let calendarClientID = process.env.REACT_GOOGLE_CALENDAR_API_KEY;
if (calendarAPIKey === undefined || calendarClientID === undefined) {
    // Read environment variables from a local .env file
    let envVariables = fs.readFileSync(".env");
    envVariables = envVariables.toString().split('\n');
    envVariables.forEach(variableDeclaration => {
        // Get rid of unecessary characters
        variableDeclaration = variableDeclaration.replace('\r','').replace('\n','').replace('"','').replace('"','').split('=');
        // Parse
        let varName = variableDeclaration[0];
        let varValue = variableDeclaration.slice(1)[0];
        if (varName === "REACT_GOOGLE_CALENDAR_CLIENT_ID") {
            calendarClientID = varValue;
        }
        else if (varName === "REACT_GOOGLE_CALENDAR_API_KEY") {
            calendarAPIKey = varValue;
        }
    });
}

// Write apiGoogleConfig file
if (calendarAPIKey === undefined || calendarClientID === undefined) {
    console.log("Calendar setup error: couldn't fine appropriate environment variables. We need REACT_GOOGLE_CALENDAR_CLIENT_ID and REACT_GOOGLE_CALENDAR_API_KEY environment variables or environment variable declarations in a local.env file with the appropriate information");
} else {
    let calendarAPIConfig = {
        "clientId": calendarAPIKey,
        "apiKey": calendarClientID,
        "scope": "https://www.googleapis.com/auth/calendar",
        "discoveryDocs": ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]
    }
    fs.writeFileSync('apiGoogleconfig.json', JSON.stringify(calendarAPIConfig));
    console.log("[Calendar] Successfully wrote apiGoogleconfig.json");
}

// Calendar Writing Script References:
// https://nodejs.org/en/knowledge/file-system/how-to-write-files-in-nodejs/
// https://www.w3schools.com/js/js_json_stringify.asp
// https://stackoverflow.com/questions/41381629/json-stringify-a-string-which-is-actual-nodejs-code - maybe not
// https://stackoverflow.com/questions/10058814/get-data-from-fs-readfile
// https://stackoverflow.com/questions/34135302/how-to-read-the-content-of-files-synchronously-in-node-js
// https://www.w3schools.com/jsref/jsref_split.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// https://www.w3schools.com/jsref/jsref_slice_array.asp
// https://www.w3schools.com/jsref/jsref_replace.asp