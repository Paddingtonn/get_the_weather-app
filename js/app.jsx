import React from 'react';
import ReactDOM from 'react-dom';
import regeneratorRuntime from 'regenerator-runtime';
import Titles from './titles.jsx';
import Form from './form.jsx';
import Weather from './weather.jsx';
import "../scss/main.scss";

const api_key = "8eee728b196e1c92c8bb180d090991ea";

document.addEventListener('DOMContentLoaded', function() {

    class App extends React.Component {
        state={
            city: '',
            country: '',
            temperature:'',
            description:'',
            main:'',
            error:'',
            pic:'',
            sectionClass: "container",
        };

        getWeather = async (e) => {
            e.preventDefault();

            const city = e.target.elements.city.value;
            const country = e.target.elements.country.value;
            const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${api_key}&units=metric`);
            const data = await api_call.json();
            console.log(data);

            if(city && country) {
                this.setState({
                    city: data.name,
                    country: data.sys.country,
                    temperature: data.main.temp,
                    description: data.weather[0].description,
                    main: data.weather[0].main,
                    error: '',
                })
            }else{
                this.setState({
                    error: 'City/Country has not been chosen'
                })
            }
        };

        render(){
            return <section className={this.state.sectionClass}>
                <div className="main_box">
                    <div className="weather_box">
                        <Titles/>
                        <Form getWeather={this.getWeather}/>
                        <Weather city={this.state.city} country={this.state.country} temp={this.state.temperature} description={this.state.description} err={this.state.error} main={this.state.main} class={this.state.sectionClass}/>
                    </div>
                </div>
            </section>
        }
    }

    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    )
});