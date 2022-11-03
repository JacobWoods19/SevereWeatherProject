alerts = [] // global array

about_severe_weather = {
    "blizzard" : "Snow and/or blowing snow reducing visibility to 1/4 mile or less for 3 hours or longer AND Sustained winds of 35 mph or greater or frequent gusts to 35 mph or greater.",
    "winter storm" : "5 inches or more of snow/sleet within a 12-hour period or 7 inches or more of snow/sleet within a 24-hour period AND/OR Enough ice accumulation to cause damage to trees or powerlines. AND/OR a life threatening or damaging combination of snow and/or ice accumulation with wind.",
    "ice storm" : "1/4 inch or more of ice accumulation",
    "heat advisory" : "A heat advisory is when the heat index value is expected to reach 105 to 109 degrees (east of the Blue Ridge) or 100 to 104 degrees (west of the Blue Ridge) within the next 12 to 24 hours",
    "severe thunderstorm" : "1) Winds of 58 mph or higher AND/OR Hail 1 inch in diameter or larger.",
    "tornado" : "A tornado is a violently rotating column of air extending from a thunderstorm to the ground. A watch will be issued when conditions are favorable for the development of tornadoes such as 1) Winds of 58 mph or higher AND/OR Hail 1 inch in diameter or larger.",
    "frost" : "A Frost Advisory is issued when the minimum temperature is forecast to be 33 to 36 degrees on clear and calm nights during the growing season.",
    "wind" : "This alert is issued when there is a potential for damaging winds",
    "flash flood" : "A Flash Flood Watch is issued when conditions are favorable for the development of flash flooding. Which is a rapidly occurring flooding of small streams, creeks, and urban areas. Flash flooding is a life threatening situation.",
    "flood" : "A Flood Watch is issued when conditions are favorable for the development of flooding. Which is a general and prolonged rise in the water level of a stream or river. Flooding is a life threatening situation.",
    "hurricane" : "A Hurricane Watch is issued when tropical storm force winds are possible within 48 hours. A Hurricane Warning is issued when tropical storm force winds are expected within 36 hours.",
    "tropical storm" : "A Tropical Storm Watch is issued when tropical storm force winds are possible within 48 hours. A Tropical Storm Warning is issued when tropical storm force winds are expected within 36 hours.",
    "tropical depression" : "A Tropical Storm Watch is issued when tropical storm force winds are possible within 48 hours. A Tropical Storm Warning is issued when tropical storm force winds are expected within 36 hours.",
    "dense fog" : "A Dense Fog Advisory is issued when visibilities are reduced to 1/4 mile for 2 hours or longer",
    "winter weather" : "A Winter Weather Advisory will be issued for any amount of freezing rain, or when 2 to 4 inches of snow (alone or in combination with sleet and freezing rain), is expected to cause a significant inconvenience, but not serious enough to warrant a warning.",
    "snow squall" : "A Snow Squall Warning is issued when snow squalls are occurring or are expected to occur within the next 2 hours. Snow squalls are a sudden, brief, and intense snowfall that reduces visibility to less than 1/4 mile for 1 hour or longer."
}
class Alert {
    constructor(headline, event, description, severity, urgency) {
        this.headline = headline;
        this.event = event;
        this.description = description;
        this.severity = severity;
        this.urgency = urgency;
    }
    print() {
        console.log(this.headline);
        console.log(this.event);
        console.log(this.description);
        console.log(this.severity);
        console.log(this.urgency);
    }
    warningRank() {
        if(this.event.toLowerCase().includes('warning')){
            return 1;
        }
        else if(this.event.toLowerCase().includes('watch')){
            return 2;
        }
        else if (this.event.toLowerCase().includes('advisory')){
            return 3;
        }
    }
    warningType() {
        if(this.event.toLowerCase().includes('warning')){
            return 'warning';
        }
        else if(this.event.toLowerCase().includes('watch')){
            return 'watch';
        }
        else if (this.event.toLowerCase().includes('advisory')){
            return 'advisory';
        }
    }
    eventAdditionalInfo(){
        var about_element = ""
        if(this.event.toLowerCase().includes('winter') || this.event.toLowerCase().includes('snow') || this.event.toLowerCase().includes('blizzard')){

            about_element = "<h5> -About Snow </h5> <p> Snow forms around nuculate, which are particles in the atmosphere that then have super cooled water droplets form around them and crystalize. If there is a shallow warm layer present, then that snow can become sleet. Snow shape, size, and characterisitcs heavilty depends on wind speed, temperature, and moisture present in the atmostphere. </p>"
            return about_element;
        }
        else if(this.event.toLowerCase().includes('tornado')){

            about_element = "<h5> -About Tornadoes </h5> <p> Tornadoes are a violently rotating column of air extending from a thunderstorm to the ground. Tornadoes are most common in the spring and summer months, but can occur at any time of the year. They often includer multiple vorticies within them and are commonly found in the Midwest.</p>"
            return about_element;
        }
        else if(this.event.toLowerCase().includes('flood')){

            about_element = "<h5> -About Floods </h5> <p> A flood is a general and prolonged rise in the water level of a stream or river. Floods are a life threatening situation. They are often caused by large amounts of rainfall but can also be caused by snowfall melting elsewhere or rain that persists elsewhere. It is the leading cause of death among all severe weather events. </p>"
            return about_element;
        }
        else if(this.event.toLowerCase().includes('hurricane')){

            about_element = "<h5> -About Hurricanes </h5> <p> A hurricane is a tropical cyclone that has winds of 74 mph or higher. They are the most powerful storms on Earth. They are often called hurricanes in the Atlantic and typhoons in the Pacific. </p>"
            return about_element;
        }
        else if(this.event.toLowerCase().includes('heat')){

            about_element = "<h5> -About Heat </h5> <p> Heat is a dangerous weather condition that can cause heat exhaustion, heat stroke, and even death. Heat is caused by the sun's rays and can be dangerous when the heat index is above 90 degrees. The heat index is figured by relative humidity and temerature.</p>"
            return about_element;
        }
        else if(this.event.toLowerCase().includes('wind')){
            about_element = "<h5> -About Wind </h5> <p> Wind is a dangerous weather condition that can cause damage to property. Wind is caused by the uneven heating of the Earth's surface and is often found at the intersection of fronts.</p>"
            return about_element;
        }
        else if(this.event.toLowerCase().includes('thunderstorm')){

            about_element = "<h5> -About Thunderstorms </h5> <p> Thunderstorms are often caused by three things: an unstable atmosphere, moisture, and some way that the atmosphere is moving such as a wind. They are common at the intersection of fronts where air is the most unstable. Thunderstorms often have high winds, hail, large amounts of rain, and thunder/lightning.</p>"
            return about_element;
        }
        else if(this.event.toLowerCase().includes('fog')){

            about_element = "<h5> -About Fog </h5> <p> Fog is a cloud that is at or near the ground. It is caused by the condensation of water vapor in the air. Fog is often found in the morning and at night. </p>"
            return about_element;
        }
        else if(this.event.toLowerCase().includes('ice')){

            about_element = "<h5> -About Ice </h5> <p> Ice comes in all shapes and sizes but mostly either occurs when water freezes on the ground or in the sky when snow melts briefly in a warm layer of the atmosphere. Ice is primarly dangerous for people in veichles.</p>"
            return about_element;
        }
    }
    
    //return description of event type
    eventTypeDescription() {
        if (this.event.toLowerCase().includes('blizzard')){
            return about_severe_weather['blizzard'];
        }
        else if (this.event.toLowerCase().includes('winter storm')){
            return about_severe_weather['winter storm'];
        }
        else if (this.event.toLowerCase().includes('ice storm')){
            return about_severe_weather['ice storm'];
        }
        else if (this.event.toLowerCase().includes('heat advisory')){
            return about_severe_weather['heat advisory'];
        }
        else if (this.event.toLowerCase().includes('severe thunderstorm')){
            return about_severe_weather['severe thunderstorm'];
        }
        else if (this.event.toLowerCase().includes('tornado')){
            return about_severe_weather['tornado'];
        }
        else if (this.event.toLowerCase().includes('snow squall')){
            return about_severe_weather['snow squall'];
        }
        else if (this.event.toLowerCase().includes('frost')){
            return about_severe_weather['frost'];
        }
        else if (this.event.toLowerCase().includes('wind')){
            return about_severe_weather['wind'];
        }
        else if (this.event.toLowerCase().includes('flash flood')){
            return about_severe_weather['flash flood'];
        }
        else if (this.event.toLowerCase().includes('flood')){
            return about_severe_weather['flood'];
        }
        else if (this.event.toLowerCase().includes('hurricane')){
            return about_severe_weather['hurricane'];
        }
        else if (this.event.toLowerCase().includes('tropical storm')){
            return about_severe_weather['tropical storm'];
        }
        else if (this.event.toLowerCase().includes('tropical depression')){
            return about_severe_weather['tropical depression'];
        }
        else if (this.event.toLowerCase().includes('dense fog')){
            return about_severe_weather['dense fog'];
        }
        else if (this.event.toLowerCase().includes('winter weather')){
            return about_severe_weather['winter weather'];
        }

    }
}
    

//add event listener to button, get the value from the selector and pass it to the function
document.getElementById('getAlerts').addEventListener('click', function () {
    // delete all children of the alerts div
    const myNode = document.getElementById("alerts");
    myNode.textContent = '';
    alerts = [];

    let alertType = document.getElementById('alertType').value;
    getWeatherAlerts(alertType);
});


const getWeatherAlerts = async (alert_type) => {
    const response = await fetch('https://api.weather.gov/alerts/active?area='+ alert_type);
    const myJson = await response.json(); 
    console.log(myJson);

    for (let i = 0; i < myJson.features.length; i++) {
        console.log(myJson.features[i].properties.headline);
        console.log(myJson.features[i].properties.event);
        console.log(myJson.features[i].properties.description);
        console.log(myJson.features[i].properties.severity);
        console.log(myJson.features[i].properties.urgency);
        let alert = new Alert(myJson.features[i].properties.headline, myJson.features[i].properties.event, myJson.features[i].properties.description, myJson.features[i].properties.severity, myJson.features[i].properties.urgency);
        alerts.push(alert);

    }
    if (alerts.length == 0) {
        alert("No alerts for this area");

    }
    else{
        // sort alerts by warning type advisroy, watch, warning
        alerts.sort(function(a, b){
            if(a.warningRank() < b.warningRank()) { return -1; }
            if(a.warningRank() > b.warningRank()) { return 1; }
            return 0;
        });
        for (let i = 0; i < alerts.length; i++) {

            //make a bootstrap card of alert and append to page
            let card = document.createElement('div');
            card.className = 'card text-white bg-danger mb-3 w-75 mx-auto mt-3 shadow-lg';
            let cardBody = document.createElement('div');
            cardBody.className = 'card-body';
            let cardTitle = document.createElement('h5');
            cardTitle.className = 'card-title';
            cardTitle.innerHTML = alerts[i].headline;
            let cardText = document.createElement('p');
            cardText.className = 'card-text';
            cardText.innerHTML = alerts[i].description;
   
            card_addtional = document.createElement('div');
            card_addtional.className = 'card-footer';


            let cardAlert = document.createElement('p');
            cardAlert.className = 'card-text p-3 mb-2 bg-dark text-white text-center rounded w-50 mx-auto';
            
            cardAlert.innerHTML = "Event Type: " + alerts[i].event;
            cardAlert.innerHTML += "<br>Severity: " + alerts[i].severity;
            cardAlert.innerHTML += "<br>Urgency: " + alerts[i].urgency;
    
            card_addtional.innerHTML += "<h4 class = 'text-dark'>Additional Info From Your Friendly Severe Weather Student</h4>";
            //if the event type is a warning, change the card color to yellow
            if(alerts[i].warningType() == 'warning'){
                card.className = 'card text-white bg-danger mb-3 w-75 mx-auto mt-3 shadow-lg';
                //add some info to the card about what the warning means
        
                card_addtional.innerHTML += "<h5>-What a Warning Means </h5> A warning means that hazardous weather is imminent or occurring. If you are in the path of the storm, take shelter immediately. If you are not in the path of the storm, monitor local media and weather conditions.";
            }
            //if the event type is a watch, change the card color to orange
            else if(alerts[i].warningType() == 'watch'){
                card.className = 'card text-white bg-warning mb-3 w-75 mx-auto mt-3 shadow-lg';
                //add some info to the card about what the watch means
                card_addtional.innerHTML += "<h5>-What a Watch Means </h5> A watch means that hazardous weather is possible in your area. Monitor local media and weather conditions. If you are in the path of the storm, be prepared to take shelter.";
            }
            //if the event type is an advisory, change the card color to blue
            else if(alerts[i].warningType() == 'advisory'){
                card.className = 'card text-white bg-secondary mb-3 w-75 mx-auto mt-3 shadow-lg';
                //add some info to the card about what the advisory means
                card_addtional.innerHTML += "<h5>-What an Advisory Means </h5> An advisory means that hazardous weather is occurring or will occur soon. If you are in the path of the storm, take shelter immediately. If you are not in the path of the storm, monitor local media and weather conditions.";
            }
            card_addtional.innerHTML += "<hr> <h5>-About " + alerts[i].event+ ", as described by the National Weather Service:</h5>" + alerts[i].eventTypeDescription(); 
            
            card_addtional.innerHTML += alerts[i].eventAdditionalInfo()

            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardText);
            card.appendChild(cardBody);
            card.appendChild(cardAlert);
            card.appendChild(card_addtional);
            document.getElementById('alerts').appendChild(card);
        }
    }

}


