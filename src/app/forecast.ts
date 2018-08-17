export interface Forecast {
    ftime: string,
    W: string,
    T: number
}

export interface ForecastResults {
    name: string,
    atime: string,
    forecast: Forecast[]
}

export interface ForecastResponse {
    results: ForecastResults[]
}