// window.onload = function() {
//     const updateTime = () => {
//         const now = new Date();
//         const utcTime = now.toUTCString();
//         const day = now.toLocaleString('en-us', { weekday: 'long' });

//         document.getElementById('currentTime').textContent = utcTime;
//         document.getElementById('currentDay').textContent = day;
//     };

//     updateTime();
//     setInterval(updateTime, 1000);
// };

const dateTime = () => {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const currentDate = new Date();
    const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];
    const UTCTime = currentDate.getTime();
  
    document.querySelector('[data-testid="currentDay"]').textContent = dayOfWeek;
    document.querySelector('[data-testid="currentTimeUTC"]').textContent =
      UTCTime;
  };
  
  // Update the date and time every second
  setInterval(dateTime, 1000);
  
  // Initial update
  dateTime();
  
