import React from "react";

const Weather = props => (
	<div className="weather__info">
	 {	
	 	props.city && props.country && <p className="weather__key"> Location: 
	 		<span className="weather__value"> { props.city }, { props.country }</span>
	 	</p> 
	 }
	 { 	
	 	props.time && <p className="weather__key"> Time: 
	 		<span className="weather__value"> { props.time }	</span>
	 	</p> 
	 }
	 { 	
	 	props.pm25 && <p className="weather__key"> 초 미세먼지: 
	 		<span className="weather__value"> { props.pm25 } </span>
	 	</p> 
	 }
	 { 	
	 	props.pm10 && <p className="weather__key"> 미세먼지: 
	 		<span className="weather__value"> { props.pm10 } </span>
	 </p> 
	 }
	 { 
	 	props.error && <p className="weather__error">{ props.error }</p>  
	 }
	</div>
);

export default Weather;