/****** VARIABLES ******/ const btnToggleDaily = document.getElementById("toggle-daily"), btnToggleWeekly = document.getElementById("toggle-weekly"), btnToggleMonthly = document.getElementById("toggle-monthly");
/****** SET DEFAULT ON WINDOW LOAD ******/ window.addEventListener("load", function(e) {
    btnToggleWeekly.classList.add("active");
});
/****** TOGGLE DAILY DATA ******/ btnToggleDaily.addEventListener("click", ()=>{
    if (btnToggleWeekly.classList.contains("active")) btnToggleWeekly.classList.remove("active");
    else if (btnToggleMonthly.classList.contains("active")) btnToggleMonthly.classList.remove("active");
    btnToggleDaily.classList.add("active");
    document.getElementById("work-latest-week-hours").innerHTML = "TEST";
    document.getElementById("work-last-week-hours").innerHTML = "TEST";
    document.getElementById("play-latest-week-hours").innerHTML = "TEST";
    document.getElementById("play-last-week-hours").innerHTML = "TEST";
    document.getElementById("study-latest-week-hours").innerHTML = "TEST";
    document.getElementById("study-last-week-hours").innerHTML = "TEST";
    document.getElementById("exercise-latest-week-hours").innerHTML = "TEST";
    document.getElementById("exercise-last-week-hours").innerHTML = "TEST";
    document.getElementById("social-latest-week-hours").innerHTML = "TEST";
    document.getElementById("social-last-week-hours").innerHTML = "TEST";
    document.getElementById("self-care-latest-week-hours").innerHTML = "TEST";
    document.getElementById("self-care-last-week-hours").innerHTML = "TEST";
});
/****** TOGGLE WEEKLY DATA ******/ btnToggleWeekly.addEventListener("click", ()=>{
    if (btnToggleDaily.classList.contains("active")) btnToggleDaily.classList.remove("active");
    else if (btnToggleMonthly.classList.contains("active")) btnToggleMonthly.classList.remove("active");
    btnToggleWeekly.classList.add("active");
    document.getElementById("work-latest-week-hours").innerHTML = "TEST 2";
    document.getElementById("work-last-week-hours").innerHTML = "TEST 2";
    document.getElementById("play-latest-week-hours").innerHTML = "TEST 2";
    document.getElementById("play-last-week-hours").innerHTML = "TEST 2";
    document.getElementById("study-latest-week-hours").innerHTML = "TEST 2";
    document.getElementById("study-last-week-hours").innerHTML = "TEST 2";
    document.getElementById("exercise-latest-week-hours").innerHTML = "TEST 2";
    document.getElementById("exercise-last-week-hours").innerHTML = "TEST 2";
    document.getElementById("social-latest-week-hours").innerHTML = "TEST 2";
    document.getElementById("social-last-week-hours").innerHTML = "TEST 2";
    document.getElementById("self-care-latest-week-hours").innerHTML = "TEST 2";
    document.getElementById("self-care-last-week-hours").innerHTML = "TEST 2";
});
/****** TOGGLE MONTHLY DATA ******/ btnToggleMonthly.addEventListener("click", ()=>{
    if (btnToggleDaily.classList.contains("active")) btnToggleDaily.classList.remove("active");
    else if (btnToggleWeekly.classList.contains("active")) btnToggleWeekly.classList.remove("active");
    btnToggleMonthly.classList.add("active");
    document.getElementById("work-latest-week-hours").innerHTML = "TEST 3";
    document.getElementById("work-last-week-hours").innerHTML = "TEST 3";
    document.getElementById("play-latest-week-hours").innerHTML = "TEST 3";
    document.getElementById("play-last-week-hours").innerHTML = "TEST 3";
    document.getElementById("study-latest-week-hours").innerHTML = "TEST 3";
    document.getElementById("study-last-week-hours").innerHTML = "TEST 3";
    document.getElementById("exercise-latest-week-hours").innerHTML = "TEST 3";
    document.getElementById("exercise-last-week-hours").innerHTML = "TEST 3";
    document.getElementById("social-latest-week-hours").innerHTML = "TEST 3";
    document.getElementById("social-last-week-hours").innerHTML = "TEST 3";
    document.getElementById("self-care-latest-week-hours").innerHTML = "TEST 3";
    document.getElementById("self-care-last-week-hours").innerHTML = "TEST 3";
});

//# sourceMappingURL=index.c5dfee90.js.map
