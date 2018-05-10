import React from 'react';

class Weather extends React.Component{

    render(){
        return <div>
            {this.props.city && this.props.country && <h2>{this.props.city}, {this.props.country}</h2>}
            {this.props.temp && this.props.description && <p><span>temperature: </span> {this.props.temp} <sup>o</sup>C, {this.props.description}</p>}
            {this.props.main === 'Clear' && <img className="container_sun"/>}
            {/*{this.props.main === 'Thunderstorm' && <img style={this.state} src="https://cdn.pixabay.com/photo/2013/04/01/09/22/thunderstorm-98541_640.png"/>}*/}
            {this.props.main === 'Clouds' && <div className="container_sun"><img id='clouds' src="../img/clouds.png"/></div>}
            {/*{this.props.main === 'Rain' && <img style={this.state} src="http://delawareracing.com/DragStrip/wp-content/uploads/2016/03/Rain_Cloud.png"/>}*/}
            {/*{this.props.main === 'Drizzle' && <img style={this.state} src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Weather-overcast-rare-showers.svg/120px-Weather-overcast-rare-showers.svg.png"/>}*/}
            {/*{this.props.main === 'Haze' && <img/>}*/}
            <p>{this.props.err}</p>
        </div>
    }
}
export default Weather;