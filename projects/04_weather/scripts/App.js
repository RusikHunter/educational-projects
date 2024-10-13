class RequestError extends Error {
    constructor(message) {
        super(message)

        this.name = "Request error"
    }
}

class WeatherAPIFetcher {
    KEY = "03eb4efca24f3a815d445a3bfa3f1fc3"
    city = "Kiev"

    cityRequest = `http://api.openweathermap.org/geo/1.0/direct?q=${this.city}&limit=5&appid=${this.KEY}`

    async makeCityRequest() {
        try {
            const response = await fetch(this.cityRequest)

            if (!response.ok) {
                throw new RequestError("Something went wrong...")
            }

            const data = await response.json()
            console.log(data)

            if (data.length === 0) {
                throw new RequestError("City not found")
            }
        } catch (error) {
            console.log(error)
        }
    }
}

const weatherAPIFetcher = new WeatherAPIFetcher()
weatherAPIFetcher.makeCityRequest()