/****** VARIABLES ******/

const   btnToggleDaily = document.getElementById('toggle-daily'),
        btnToggleWeekly = document.getElementById('toggle-weekly'),
        btnToggleMonthly = document.getElementById('toggle-monthly');

/****** SET DEFAULT ON WINDOW LOAD ******/

window.addEventListener('load', function(e) {
    btnToggleWeekly.classList.add('active');
})

/****** TOGGLE DAILY DATA ******/

btnToggleDaily.addEventListener('click', () => {

    if (btnToggleWeekly.classList.contains('active')) {

        btnToggleWeekly.classList.remove('active');
        
    } else if (btnToggleMonthly.classList.contains('active')) {

        btnToggleMonthly.classList.remove('active');
    }

    btnToggleDaily.classList.add('active');

    document.getElementById('work-latest-week-hours').innerHTML = "TEST";
    document.getElementById('work-last-week-hours').innerHTML = "TEST";

    document.getElementById('play-latest-week-hours').innerHTML = "TEST";
    document.getElementById('play-last-week-hours').innerHTML = "TEST";

    document.getElementById('study-latest-week-hours').innerHTML = "TEST";
    document.getElementById('study-last-week-hours').innerHTML = "TEST";

    document.getElementById('exercise-latest-week-hours').innerHTML = "TEST";
    document.getElementById('exercise-last-week-hours').innerHTML = "TEST";

    document.getElementById('social-latest-week-hours').innerHTML = "TEST";
    document.getElementById('social-last-week-hours').innerHTML = "TEST";

    document.getElementById('self-care-latest-week-hours').innerHTML = "TEST";
    document.getElementById('self-care-last-week-hours').innerHTML = "TEST";

});

/****** TOGGLE MONTHLY DATA ******/