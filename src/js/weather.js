let button = document.querySelector(".input__submit");
let inputValue = document.querySelector(".input__value");
let name = document.querySelector(".weather__name");
let date = document.querySelector(".weather__date");
let desc = document.querySelector(".weather__desc");
let temp = document.querySelector(".weather__temp");
let humidity = document.querySelector(".weather__humidity");
let weather = document.querySelector(".weather");

button.addEventListener("click", () => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&units=metric&appid=e8a387a63360bdebef42fd05c1e5f21f`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let nameValue = data["name"];
      let tempValue = data["main"]["temp"];
      let humValue = data["main"]["humidity"];
      let date = data["dt"];
      let desc = data["weather"][0]["description"];

      weather.innerHTML = `
        <div class="container">
            <div class="weather__inner">
                <div class="weather__info">
                    <h1 class="weather__name">${nameValue}</h1>
                    <div class="weather__date">${timeConverter(date)}</div>
                </div>
                <div class="weather__main">                
                    <p class="weather__temp">${Math.round(tempValue)}° С</p>
                    <p class="weather__desc">${desc}</p>
                </div>
                <div class="weather__humidity">                
                    <h4>Влажность</h4>
                    <p>${humValue}%</p>
                </div>
            </div>
        </div>
        `;
    })
    .catch((err) => alert("Неправильно введен город"));
    event.preventDefault();
});

function timeConverter(time) {
  let a = new Date(time * 1000);
  let months = [
    "Января",
    "Февраля",
    "Марта",
    "Апреля",
    "Мая",
    "Июня",
    "Июля",
    "Августа",
    "Сентября",
    "Октября",
    "Ноября",
    "Декабря",
  ];
  let year = a.getFullYear();
  let month = months[a.getMonth()];
  let date = a.getDate();
  let hour = a.getHours();
  let min = a.getMinutes();
  let sec = a.getSeconds();
  return `${date} ${month} ${year} ${hour}:${min < 10 ? "0" + min : min}:${
    sec < 10 ? "0" + sec : sec
  }`;
}
