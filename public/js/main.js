const cityName = document.getElementById('cityname')

const submitbtn = document.getElementById('submitbtn');

const city_name = document.getElementById('city_name');

const temp_status = document.getElementById("temp_status");
const temp = document.getElementById("temp");



const getInfo = async (event) => {
    event.preventDefault();
   
   
    let cityVal = cityName.value;
    if (cityVal=="") {
        city_name.innerText =`Plz write city name before search`
    } else {
     
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=7fca706065a21ff3fe5adaa1e5d47c65`
        const response = await fetch(url);
        const data =  await response.json();
        const arrData = [data];
        city_name.innerText = `${arrData[0].name}`,`${arrData[0].sys.country}`;

        temp.innerText=arrData[0].main.temp;
        // temp_status.innerText=arrData[0].weather.main;


        const tempMood = data.weather[0].main;
        const iconCode = data.weather[0].icon;

        // Setting the weather icon using the icon code from OpenWeatherMap
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;
        temp_status.innerHTML = `<img src="${iconUrl}" alt="${tempMood}" />`;
            }
        catch{
             city_name.innerText =`Plz write city name properly`
        }
        
     }
}
submitbtn.addEventListener('click', getInfo);






//For date



// Function to display the current date and time
const updateDateTime = () => {
    // Get current date and time
    const currentDate = new Date();

    // Format date to get day of the week and the date
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthsOfYear = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    const dayOfWeek = daysOfWeek[currentDate.getDay()];
    const dayOfMonth = currentDate.getDate();
    const month = monthsOfYear[currentDate.getMonth()];
    const year = currentDate.getFullYear();

    // Format time as HH:MM:SS
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();

    // Ensure time is in 2-digit format (e.g., 07:05:09)
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;

    const timeString = `${hours}:${minutes}:${seconds}`;
    const dateString = `${dayOfWeek}, ${dayOfMonth} ${month}`;

    // Update HTML elements with current date and time
    document.getElementById("day").innerText = dayOfWeek;
    document.getElementById("today_date").innerText = `${dayOfMonth} ${month}, ${year}`;
    document.getElementById("time").innerText = timeString;
}

// Call the updateDateTime function every second to keep the time updated
setInterval(updateDateTime, 1000);

// Initial call to display the date and time immediately when the page loads
updateDateTime();





