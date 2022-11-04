/****** VARIABLES ******/

const   btnToggleDaily = document.getElementById('toggle-daily'),
        btnToggleWeekly = document.getElementById('toggle-weekly'),
        btnToggleMonthly = document.getElementById('toggle-monthly');

btnToggleDaily.addEventListener('click', () => {
    document.getElementById('work-week-hours').innerHTML = "TEST";
})