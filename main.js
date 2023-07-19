import dashboardData from "./src/js/data.json";
import "./src/scss/style.scss";

const btnToggleDaily = document.getElementById("toggle-daily");
const btnToggleWeekly = document.getElementById("toggle-weekly");
const btnToggleMonthly = document.getElementById("toggle-monthly");

function updateCardValues(tab) {
  const data = dashboardData;

  data.forEach((item) => {
    const title = item.title.toLowerCase();
    const timeframes = item.timeframes[tab];

    const currentHoursElement = document.getElementById(
      `${title}-latest-week-hours`
    );
    const previousHoursElement = document.getElementById(
      `${title}-last-week-hours`
    );

    if (currentHoursElement && previousHoursElement && timeframes) {
      const currentHours = timeframes.current;
      const previousHours = timeframes.previous;

      currentHoursElement.textContent = `${currentHours}hrs`;
      previousHoursElement.textContent = `${previousHours}hrs`;
    }
  });
}

function loadDailyData() {
  btnToggleDaily.classList.add("active");
  btnToggleWeekly.classList.remove("active");
  btnToggleMonthly.classList.remove("active");

  updateCardValues("daily");
}

btnToggleDaily.addEventListener("click", () => {
  if (!btnToggleDaily.classList.contains("active")) {
    loadDailyData();
  }
});

btnToggleWeekly.addEventListener("click", () => {
  if (!btnToggleWeekly.classList.contains("active")) {
    btnToggleWeekly.classList.add("active");
    btnToggleDaily.classList.remove("active");
    btnToggleMonthly.classList.remove("active");

    updateCardValues("weekly");
  }
});

btnToggleMonthly.addEventListener("click", () => {
  if (!btnToggleMonthly.classList.contains("active")) {
    btnToggleMonthly.classList.add("active");
    btnToggleDaily.classList.remove("active");
    btnToggleWeekly.classList.remove("active");

    updateCardValues("monthly");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  loadDailyData();
});
