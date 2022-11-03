import * as dashboardData from "./data.json";

// set up loops to walk through values and return each to respective DOM element

console.log(dashboardData);
console.log(dashboardData[0]);

// document.body.innerHTML = JSON.stringify(dashboardData);

/* DATA TO EXTRAPOLATE IN EACH OBJECT:

    [0]
    []

    [0]
    [1]
*/

/* for (let individualData in dashboardData) {
    console.log(individualData);
} */

for (let i = 0; i < dashboardData.length; i++) {
    console.log(dashboardData[i]);
    /*for (let j = 0; j < dashboardData.length; i++) {
        console.log(dashboardData[j]);
    }*/
}

const returnDashboardData = "";

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