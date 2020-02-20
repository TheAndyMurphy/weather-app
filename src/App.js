import React from 'react';
import './App.scss';
import LocationModal from './components/location-modal/location-modal.component';
import Weather from './components/weather/weather.component';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      apikey : process.env.REACT_APP_KEY,
      city: 'Dublin',
      currentWeather : '',
      forecast : '',
      modalOpen: false
    }
  }

  componentDidMount(){
    this.currentWeather();
    this.forecast();
  }

  currentWeather = () => {
      fetch(`//api.openweathermap.org/data/2.5/weather?q=${this.state.city}&units=metric&appid=${this.state.apikey}`)
      .then(res => res.json())
      .then(
        data => this.setState({ currentWeather: data})
      )
  }
  forecast = () => {
      fetch(`//api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&units=metric&appid=${this.state.apikey}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ forecast: data })
      })
  }

  handleModal = () =>{
    this.setState({modalOpen: !this.state.modalOpen});
  }

  handleChange = (e) => {
      this.setState({city: e.target.value});
      e.preventDefault();
  }

  handleSubmit = (e) => {
      e.preventDefault();
      this.handleModal();
      this.currentWeather();
      this.forecast();
  }
  render(){
    return (
      <div className="app">
          <Weather weatherData={this.state.currentWeather} handleModal={this.handleModal} forecastData={this.state.forecast} />
          
          {
              this.state.modalOpen &&
              <LocationModal 
              handleChange={this.handleChange} 
              handleSubmit={this.handleSubmit}
              handleModal={this.handleModal}
              />
          }
          
      </div>
    );
  }
}

export default App;
