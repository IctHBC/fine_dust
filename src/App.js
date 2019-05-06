import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "Tpj7Xc8d6QGaEyrfY";

class App extends React.Component {
  state = {
    time: undefined,
    city: undefined,
    country: undefined,
    pm25: undefined,
    pm10: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.airvisual.com/v2/nearest_city?city=${city}&country=${country}&rad=500&key=${API_KEY}`);
    const data = await api_call.json();
    if (city && country) {
      this.setState({
        time: data.data.current.pollution.ts,
        city: data.data.city,
        country:data.data.country,
        pm25: data.data.current.pollution.aqius,
        pm10: data.data.current.pollution.aqicn,
        error: ""
      });
    } else {
      this.setState({
        time: undefined,
        city: undefined,
        country: undefined,
        pm25: undefined,
        pm10: undefined,
        error: "도시와 나라를 입력해주십시오."
      });
    }
  }
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather 
                    time={this.state.time}
                    city={this.state.city}
                    country={this.state.country}
                    pm25={this.state.pm25} 
                    pm10={this.state.pm10}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default App;