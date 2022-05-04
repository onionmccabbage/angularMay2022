// a class to represent the data returned by a WeatherReport

export default class WeatherReport {
    city: string
    country: string
    description: string
    temperature: number
    windSpeed: number
    windDirection: number
    everythingElse: object[]
    constructor(city: string,
        country: string,
        description: string,
        temperature: number,
        windSpeed: number,
        windDirection: number,
        ...everythingElse: object[]) {
            this.city=city
            this.country = country
            this.description = description
            this.temperature = temperature
            this.windSpeed = windSpeed
            this.windDirection = windDirection
            this.everythingElse = everythingElse
    }
}