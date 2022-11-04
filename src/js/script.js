import * as dashboardData from "./data.json";

const   wordCardSection = document.getElementById('word-card'),
        playCardSection = document.getElementById('play-card'),
        studyCardSection = document.getElementById('study-card'),
        exerciseCardSection = document.getElementById('exercise-card'),
        socialCardSection = document.getElementById('social-card'),
        selfCareCardSection = document.getElementById('self-care-card');

 for (let individualData in dashboardData) {

    // console.log(dashboardData[individualData].timeframes);

    const { daily, weekly, monthly } = dashboardData[individualData].timeframes;

    const dailyFigures = Object.keys(daily);

    console.log(dailyFigures);
    //console.log(daily);
    console.log(daily.current);
} 