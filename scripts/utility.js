function getInnerTextById(id) {
  const value = document.getElementById(id).innerText;
  const convertedValue = parseInt(value);
  return convertedValue;
}

const liveDate = document.getElementById("live-date");

const setTime = new Date().toLocaleDateString("en-BD", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

document.getElementById("full-date").innerText = setTime;

const WeekName = new Date().toLocaleDateString("en-BD", {
  weekday: "short",
});
liveDate.innerText = WeekName;
