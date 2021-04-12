import React, { useState } from "react";
import { useSelector, useDispatch, connect } from "react-redux";

import { changeName } from "../store/profile/actions";

export const Profile = (props) => {
	console.log(props);
	const [value, setValue] = useState("");

	const handleClick = () => {
    	props.setNewName(value);
    	setValue("");
  	};

  	const handleChange = (e) => {
    	setValue(e.target.value);
  	};

  	return (
		<div>
			<h3>Profile</h3>
			<h4>{props.name}</h4>
			<input type="text" onChange={handleChange} value={value} />
			<button onClick={handleClick}>Click</button>
		</div>
	);
};