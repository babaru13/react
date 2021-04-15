import React, { useState } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import EditIcon from '@material-ui/icons/Edit';
import { Fab, TextField } from "@material-ui/core";

import { changeName } from "../store/profile/actions";

export const Profile = (props) => {
	const [value, setValue] = useState("");

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.setNewName(value);
        setValue('');
    }

  	return (
		<div>
			<h3>Profile</h3>
			<h4>{props.name}</h4>
			<form 
			onSubmit={handleSubmit}
			className="form">
                <TextField
                    label="Ваше имя"
                    type="text"
                    value={value}
                    required
                    className="form__field"
                    onChange={handleChange}
                />
                <Fab 
                    color="secondary"
                    type="submit"
                    className="form__button">
                    <EditIcon />
                </Fab>
			</form>
		</div>
	);
};

const mapStateToProps = (state) => ({
	name: state.profile.name
});

const mapDispatchToProps = {
	setNewName: changeName,
};

export const ConnectedProfile = connect(mapStateToProps, mapDispatchToProps)(Profile);