import React, {Component} from 'react';
import {Modal, Button} from 'react-bootstrap';


class WeatherModal extends Component{
    

    getWeather = async (locationID) => {
      var today = new Date();
      var date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
      const api_call = await fetch(`/api/location/${locationID}/${date}/`);
      const response = await api_call.json();
      const latestResponse = response[0];
      this.weatherState = latestResponse.weather_state_name;
      this.max_temp = latestResponse.max_temp;
      this.min_temp = latestResponse.min_temp;
      this.weatherSymbol = latestResponse.weather_state_abbr;
      this.windSpeed = latestResponse.wind_speed;
      this.humidity = latestResponse.humidity;
      console.log("Weather state : "+ this.weatherState);   
      console.log("Max Temperature : "+ this.max_temp + "deg celcius");    
      console.log("Min Temperature : "+ this.min_temp + "deg celcius");
      console.log("Wind Speed : "+ this.windSpeed + "mph");
      console.log("Humidity : "+ this.humidity + "%");     
    }

    displayDummyData = async () => {
      var today = new Date();
      var date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
      const api_call = await fetch(`/api/location/44418/${date}/`);
      const response = await api_call.json();
      const latestResponse = response[0];
      this.dummyweatherState = latestResponse.weather_state_name;
      this.dummymax_temp = latestResponse.max_temp;
      this.dummymin_temp = latestResponse.min_temp;
      this.dummyweatherSymbol = latestResponse.weather_state_abbr;
      this.dummywindSpeed = latestResponse.wind_speed;
      this.dummyhumidity = latestResponse.humidity;
    }

    render(){
        
        this.displayDummyData();

        return(  
            <Modal
             {...this.props}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Weather Information
              </Modal.Title>
            </Modal.Header>
              <Modal.Body>
                <div className="container">
                  {/* {this.getWeather()} */}
                  <div>Weather State : {this.dummyweatherState}</div>
                  <div>Minimum Temperature : {this.dummymin_temp}&deg;</div>
                  <div>Maximum Temperature : {this.dummymax_temp}&deg;</div>
                  <div>Minimum Temperature : {this.dummywindSpeed} mph</div>
                  <div>Maximum Temperature : {this.dummyhumidity} %</div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.props.onHide}>Close</Button>
              </Modal.Footer>
            </Modal>
        );
    }
}

export default WeatherModal;