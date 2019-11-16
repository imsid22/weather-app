import React, {Component} from "react";

//import logo from './logo.svg';
import './App.css';
//import Item from './Item';
import Weather from './app_components/weather.component';
import "bootstrap/dist/css/bootstrap.min.css";
import Form from './app_components/form.component';
import {Button, ButtonToolbar} from 'react-bootstrap';
import WeatherModal from './app_components/WeatherModal';
//var Modal = require('react-bootstrap-modal');
export default class App extends Component {
  
  //constructor(props){
    //super(props)
    //console.log("HIIIIIIIIIII")
    //this.obj = new WeatherModal();
    
    //console.log(this.obj);
  //}
  //constructor(){
   // super();
   // this.state = {};
   // this.getLocations();
   // this.locationList = [];
    // this.getLocations = this.getLocations.bind(this);
    // this.IdiomaticReactList = this.IdiomaticReactList.bind(this);
  //}
  state = {
    loading: true,
    locationList: [],
    showModal: false
  }
  
  callFunc = () => {
    WeatherModal.getWeather();
  }


  getLocations = async (e) => {
    e.preventDefault();
    const query = e.target.elements.query.value;

    const api_call = await fetch(`/api/location/search/?query=${query}`);
    var response = await api_call.json();
    response.sort(function(a,b){return a.title.length - b.title.length});
    this.setState({ locationList: response, loading: false, showModal: false});
    
    // for (var i = 0; i < response.length; i++){
    //   var location = response[i];
    //   this.locationList.push(location["title"]);
    // }
    // this.locationList.sort(function(a, b){return a.length - b.length});
    // //this.IdiomaticReactList();
    // console.log(this.locationList);
    // this.NumberList();
  }


  // IdiomaticReactList(locationList) {
  //   return (
  //     <div>
  //       {locationList.items.map((item, index) => (
  //         <Item key={index} item={item} />
  //       ))}
  //     </div>
  //   );
  // }
  // NumberList(props) {
  //   const numbers = props.locationList;
  //   return (
  //     <ul>
  //       {numbers.map((number) =>
  //         <ListItem key={number.toString()}
  //                   value={number} />
  
  //       )}
  //     </ul>
  //   );
  // }


  //state = { }
  
  // getWeather = async (locationID) => {
  //   var today = new Date();
  //   var date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
  //   const api_call = await fetch(`/api/location/${locationID}/${date}/`);
  //   const response = await api_call.json();
  //   this.weatherState = response[0].weather_state_name;
  //   this.max_temp = response[0].max_temp;
  //   this.min_temp = response[0].min_temp;
  //   console.log("this")

    
  // }

  // Example = () => {
  //   const [show, setShow] = useState(false);
  
  //   const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);
  
  //   return (
  //     <>
  //       <button variant="primary" onClick={handleShow}>
  //         Launch demo modal
  //       </button>
  
  //       <Modal show={show} onHide={handleClose}>
  //         <Modal.Header closeButton>
  //           <Modal.Title>Modal heading</Modal.Title>
  //         </Modal.Header>
  //         <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
  //         <Modal.Footer>
  //           <button variant="secondary" onClick={handleClose}>
  //             Close
  //           </button>
  //           <button variant="primary" onClick={handleClose}>
  //             Save Changes
  //           </button>
  //         </Modal.Footer>
  //       </Modal>
  //     </>
  //   );
  // }
  


    
    
  

  render(){
    let closeModal = () => this.setState({showModal:false});
    return(
      
      <div className="App">
        
        <Form loadweather={this.getLocations}/>
          <div>
            {this.state.locationList.map(location => (
              <div key={location.woeid}>
                <ButtonToolbar>
              <Button className = "locationButton" onClick ={function(event){this.callFunc()}}>
                {location.title}
              </Button>
              <WeatherModal 
              show = {this.state.showModal}
              onHide = {closeModal}
            />
              </ButtonToolbar>
            </div>
            ))}
          </div>  
        <Weather/>
      </div>    
    );
  }
}


//export default App;
