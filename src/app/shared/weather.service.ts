import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey = '9402da6bd74c395f71604c624cc2b231';
  url;

  constructor(private http:HttpClient) { 
    this.url='http://api.openweathermap.org/data/2.5/group?id=';  //API GET URL
    
  }

  public getWeather(cityCode){
    return this.http.get(this.url+cityCode+'&units=metric&appid='+this.apiKey);
  }

  public getJsonData(filePath: string){
    return this.http.get(filePath);
  }
  
}

