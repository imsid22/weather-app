import React, {Component} from "react";
import './App.css';
import Weather from './app_components/weather.component';
import "bootstrap/dist/css/bootstrap.min.css";
import Form from './app_components/form.component';
import {Button, ButtonToolbar} from 'react-bootstrap';
import WeatherModal from './app_components/WeatherModal';
export default class App extends Component {
  
  constructor(props){
    super(props)
    this.obj = new WeatherModal();
  }

  state = {
    loading: true,
    locationList: [],
    showModal: false
  }
  
  callFunc = (locationID) => {
    this.obj.getWeather(locationID);
    this.setState({showModal: true})
  }


  getLocations = async (e) => {
    e.preventDefault();
    const query = e.target.elements.query.value;

    const api_call = await fetch(`/api/location/search/?query=${query}`);
    var response = await api_call.json();
    response.sort(function(a,b){return a.title.length - b.title.length});
    this.setState({ locationList: response, loading: false, showModal: false});
  }


  render(){
    let closeModal = () => this.setState({showModal:false});
    return(
      
      <div className="App">
        
        <Form loadweather={this.getLocations}/>
          <div>
            {this.state.locationList.map(location => (
              <div key={location.woeid}>
                <ButtonToolbar>
                  <Button className = "locationButton" onClick ={() => this.callFunc(location.woeid)}>
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

  //constructor(){
   // super();
   // this.state = {};
   // this.getLocations();
   // this.locationList = [];
    // this.getLocations = this.getLocations.bind(this);
    // this.IdiomaticReactList = this.IdiomaticReactList.bind(this);
  //}

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

      // for (var i = 0; i < response.length; i++){
    //   var location = response[i];
    //   this.locationList.push(location["title"]);
    // }
    // this.locationList.sort(function(a, b){return a.length - b.length});
    // //this.IdiomaticReactList();
    // console.log(this.locationList);
    // this.NumberList();