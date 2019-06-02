import { Component } from '@angular/core';
import { ICurrentWeather } from './icurrent-weather';
import { WeatherService } from './weather/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'local-weather-app';

  currentWeather: ICurrentWeather

  constructor(private weatherService: WeatherService) {

  }
  doSearch(searchValue){
    if (searchValue) {
      const userInput = searchValue.split(',').map(s => s.trim());
      this.weatherService.getCurrentWeather(userInput[0],
      userInput.length > 1 ? userInput[1] : undefined ).subscribe(data => this.currentWeather = data )
    }
  }
}
