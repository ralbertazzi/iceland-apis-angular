import { Component, OnInit } from '@angular/core';
import { WeatherForecastService } from '../weather-forecast.service';
import { ForecastResponse, ForecastResults } from '../forecast';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./css/weather-icons.min.css', './forecast.component.css']
})
export class ForecastComponent {

  forecasts: ForecastResults;

  constructor(private forecastService: WeatherForecastService) { }

  retrieveForecasts(stationId) {
    this.forecastService.getForecast(stationId)
        .subscribe((data: ForecastResponse) => this.forecasts = data.results[0]);
  }

}
