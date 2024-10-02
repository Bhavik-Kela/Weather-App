const apiKey = "fe97a0c558541995e182a2d017f105b7";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
        const searchBox = document.querySelector(".searchbar input")
        const searchBtn = document.querySelector(".search-icon button")
        const weatherIcon = document.querySelector(".weather-iconss");
        const myInfo = document.querySelector(".real-desc");
        const weatherDescription = document.querySelector(".last");


        async function checkWeather(temp1) {
            const response = await fetch(apiUrl + temp1 + `&appid=${apiKey}`);

            if (response.status == 404) {

                setTimeout(() => {
                    document.querySelector(".error").style.display = "block"
                }, 955);
                document.querySelector(".error").style.display= "none"


                document.querySelector(".box").style.display = "none";


            }
            else {
                var data = await response.json();

                console.log(data);

                document.querySelector(".temp1").innerHTML = data.name;
                document.querySelector(".temp2").innerHTML = Math.round(data.main.temp) + '°C';
                document.querySelector(".temp3").innerHTML = data.main.humidity + ('%');
                document.querySelector(".temp4").innerHTML = data.wind.speed + ' Km/hr';
                document.querySelector(".last").innerHTML = data.weather[0].description;

                if (data.weather[0].main == "Clouds") {
                    weatherIcon.src = "clouds.png"

                }
                else if (data.weather[0].main == "Drizzle") {
                    weatherIcon.src = "drizzle.png"

                }
                else if (data.weather[0].main == "Mist") {
                    weatherIcon.src = "mist.png"

                }
                else if (data.weather[0].main == "Clear") {
                    weatherIcon.src = "clear.png"

                }
                else if (data.weather[0].main == "Rain") {
                    weatherIcon.src = "rain.png"
                }
            
                    
                

                document.querySelector(".box").style.display = "none";
                setTimeout(() => {
                    document.querySelector(".box").style.display = "block";
                }, 1010);

                (checkWeather);
                document.querySelector(".last").style.display = "block";



                document.querySelector(".error").style.display = "none"
            }


        }
        const myLoader = document.querySelector("#preloader");

        searchBtn.addEventListener("click", () => {
            myInfo.style.display = "none";
            document.querySelector(".error").style.display = "none";
            myLoader.style.display = "block";
            setTimeout(() => {
                myLoader.style.display = "none"
            }, 1000);

            (myLoader);

            checkWeather(searchBox.value);

        })
