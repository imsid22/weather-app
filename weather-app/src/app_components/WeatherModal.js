import React, {Component} from 'react';
import {Modal, Button} from 'react-bootstrap';


class WeatherModal extends Component{
    

    getWeather = async () => {
      var today = new Date();
      var date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
      //const api_call = await fetch(`/api/location/${locationID}/${date}/`);
      const api_call = await fetch(`/api/location/44418/${date}/`);
      const response = await api_call.json();
      this.weatherState = response[0].weather_state_name;
      this.max_temp = response[0].max_temp;
      this.min_temp = response[0].min_temp;
      //console.log("this");    
    }


    render(){
      //this.getWeather();
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
          <div>Weather State : {this.weatherState}</div>
          <div>Minimum Temperature : {this.min_temp}</div>
          <div>Maximum Temperature : {this.max_temp}</div>
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