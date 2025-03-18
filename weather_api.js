const input = document.getElementById("input");
const search_btn = document.getElementById("search_btn");
const apiKey = "81cd2c6245bafd7eb1b289453139628e";

const cityName = document.getElementById("cityName");
const country = document.getElementById("country");
const temp = document.getElementById("temp");
const main = document.getElementById("main");
const feels_like = document.getElementById("feels_like");
const humidity = document.getElementById("humidity");




const getWeather = async () => {
  try {
	const city = input.value.trim();
	if (!city) {
      alert("Please enter a city name!");
      return;
    }
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;	
    const res = await fetch(url);
	
	 if (!res.ok) {
      throw new Error("City not found");
    }
	
    const data = await res.json();
    setWeatherData(data);
  } catch (err) {
	 alert("City not found!")
    console.log(err);
  }
};


const setWeatherData = (data) => {
	
	cityName.textContent = data.name;
	country.textContent = data.sys.country;
	temp.textContent = `${data.main.temp}°C`;
	main.textContent = data.weather[0].main;
	feels_like.textContent = `${data.main.feels_like}°C`;
	humidity.textContent = `${data.main.humidity}%`;
	
	
};



search_btn.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather();
});

input.addEventListener("keydown", (e) => {
if(e.key === "Enter"){
   getWeather();
}
});
