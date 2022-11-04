import * as dashboardData from "./data.json";

const   wordCardSection = document.getElementById('word-card'),
        playCardSection = document.getElementById('play-card'),
        studyCardSection = document.getElementById('study-card'),
        exerciseCardSection = document.getElementById('exercise-card'),
        socialCardSection = document.getElementById('social-card'),
        selfCareCardSection = document.getElementById('self-care-card');

// set up loops to walk through values and return each to respective DOM element
// use if to check if DOm element matches ID, then insert data

// console.log(dashboardData);
// console.log(dashboardData[0]);

// document.body.innerHTML = JSON.stringify(dashboardData);

/* DATA TO EXTRAPOLATE IN EACH OBJECT:

*/

 for (let individualData in dashboardData) {
    // console.log(dashboardData[individualData].timeframes);
    const { daily, monthly, weekly } = dashboardData[individualData].timeframes;
    console.log(daily, weekly, monthly);
    console.log(daily[0]);
} 

/*for (let i = 0; i < dashboardData.length; i++) {

    console.log(dashboardData[i]);

}*/

// const returnDashboardData = "";

/*fetch(`${dashboardData}`, {

    method: "GET",

}).then((Response) => {

    if(Response.ok) {
        Response.json().then((json) => {
            console.log(json);
        })
    }

}).catch((error) => {

    console.log(error);

});*/


/* TOGGLE BETWEEN DAILY, WEEKLY AND MONTHLY */