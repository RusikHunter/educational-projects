class RequestError extends Error {
    constructor(message) {
        super(message)

        this.name = "Request error"
    }
}

class WeatherAPIFetcher {
    KEY = "03eb4efca24f3a815d445a3bfa3f1fc3"
    city = "London"

    elements = {}

    constructor() {
        this.#getElements()
    }

    #getElements() {
        this.elements.cityNameElement = document.querySelector('[data-js-city]')
        this.elements.cityTempElement = document.querySelector('[data-js-temp]')
        this.elements.dateElement = document.querySelector('[data-js-date]')
        this.elements.weatherIconElement = document.querySelector('[data-js-icon]')
    }

    #setCityName(city) {
        this.elements.cityNameElement.textContent = city
    }

    #setDate() {
        const now = new Date();

        const options = {
            weekday: 'long',
            day: 'numeric',
            month: 'short',
            year: '2-digit'
        }

        const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        const dateString = now.toLocaleDateString('en-US', options)

        const content = `${timeString} - ${dateString}`;

        this.elements.dateElement.textContent = content
    }

    #setWeatherData(weatherData) {
        console.log(weatherData)
        this.elements.cityTempElement.textContent = `${Math.floor(weatherData.main.temp)}°`
        this.#setDate()
        this.elements.weatherIconElement.setAttribute('src', `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`)
    }

    // найти информацию о погоде в запрашиваемом городе
    async searchCityWeatherData() {
        const cityRequestURL = `http://api.openweathermap.org/geo/1.0/direct?q=${this.city}&limit=5&appid=${this.KEY}`
        const city = await this.makeRequest(cityRequestURL)
        this.#setCityName(city[0].name)

        const qeoRequestURL = `https://api.openweathermap.org/data/2.5/weather?lat=${city[0].lat}&lon=${city[0].lon}&appid=${this.KEY}&units=metric`
        const weatherData = await this.makeRequest(qeoRequestURL)
        this.#setWeatherData(weatherData)
    }

    async makeRequest(url) {
        try {
            const response = await fetch(url)

            if (!response.ok) {
                throw new RequestError("Something went wrong...")
            }

            const data = await response.json()

            if (data.length === 0) {
                throw new RequestError("City not found")
            }

            return data
        } catch (error) {
            console.log(error)

            return false
        }
    }
}

const weatherAPIFetcher = new WeatherAPIFetcher()
weatherAPIFetcher.searchCityWeatherData()