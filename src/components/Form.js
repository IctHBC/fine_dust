import React from "react";

const Form = props => (
	<form onSubmit={props.getWeather}>
		<input type="text" name="city" placeholder="도시..."/>
		<input type="text" name="country" placeholder="나라..."/>
		<button>Get Weather</button>
	</form>
);

export default Form;