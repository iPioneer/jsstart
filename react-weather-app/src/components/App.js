import React, {Component} from 'react';
import Info from './info'
import Weather from './weather'
import Form from './form'
import './App.css';

const API_KEY = "30daad027c2c38e27c19c68e4e162e4d";

export default class App extends Component {

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    sunrise: undefined,
    sunset: undefined,
    error: undefined
  }

  getWeather = async(event) => {
    event.preventDefault();
    const city = event.target.elements.city.value
    
    if (city){
      const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await api_url.json();     
      console.log(data);
      console.log(data.cod); 
      
      if (data.cod === 200){
      console.log("From data.cod === 200");  
      const sunriseTime = new Date(data.sys.sunrise*1000).toLocaleTimeString("uk-UA");
      const sunseTime = new Date(data.sys.sunset*1000).toLocaleTimeString("uk-UA");       
        this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        sunrise: sunriseTime,
        sunset: sunseTime,
        pressure: data.main.pressure,
        error: undefined
      }); 
      } else if (data.cod === "404"){
        console.log("From data.cod === 404");
        this.setState({
          temp: undefined,
          city: undefined,
          country: undefined,
          sunrise: undefined,
          sunset: undefined,
          pressure: undefined,
          error: "Enter correct city name"
        });
      }
    } else if (!city) {
      console.log("from !city");
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        sunrise: undefined,
        sunset: undefined,
        pressure: undefined,
        error: "Enter city name"
      });
    }
  }

  render() {
    return (       
    <div className="wrapper">
      <div className="main">
        <div className="container">
          <div className="row">
            <div className="col-sm-5 info">
              <Info /></div>
            <div className="col-sm-7 form">
                <Form getWeather={this.getWeather} />
                <Weather 
                temp={this.state.temp}
                city={this.state.city}
                country={this.state.country}
                pressure={this.state.pressure}
                sunrise={this.state.sunrise}
                sunset={this.state.sunset}
                error={this.state.error} />
            </div>
          </div>
        </div>
      </div>       
    </div>
    );
  }
}