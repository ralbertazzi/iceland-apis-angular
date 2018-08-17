import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators'
import { ForecastResponse } from './forecast'

@Injectable({
  providedIn: 'root'
})
export class WeatherForecastService {

  private apiUrl = 'http://apis.is/weather/forecasts/en?stations='

  constructor(private http: HttpClient) { }

  getForecast(stationId) {
    return this.http.get<ForecastResponse>(this.apiUrl + stationId)
  }
}
