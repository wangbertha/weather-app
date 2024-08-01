const key = '3L63BZALNF6WDMKYETGMT6Q4U';

async function getWeatherData(myLocation) {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/forecast?locations=${myLocation}&aggregateHours=24&unitGroup=us&shortColumnNames=false&contentType=json&key=${key}`;
    try {
        const response = await fetch(url);
        const respJson = await response.json();
        const data = respJson.locations[myLocation].values;
        return data;
    }
    catch (err) {
        console.log(err);
    }
}

let testLocation = 'Chicago,IL';
getWeatherData(testLocation);