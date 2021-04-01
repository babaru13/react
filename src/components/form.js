import React, { useState } from "react";

import {RaisedButton, TextField, Chip, MuiThemeProvider} from "material-ui";

import { AUTHORS } from "../utils/constants";

export default function Form({ onSetMessage}) {
    const [value, setValue] = useState('');
    
    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSetMessage({text: value, author: AUTHORS.ME});
        setValue('');
    }

    return (
        <MuiThemeProvider>
            <form 
            onSubmit={handleSubmit}
            className="form">
                <div className="form__row">
                    <TextField
                        floatingLabelText="Введите сообщение"
                        type="text"
                        value={value}
                        required
                        className="form__field"
                        onChange={handleChange}
                    />
                    <RaisedButton
                    primary={true}
                    label="Отправить"
                    type="submit"
                    className="form__button"
                    />
                </div>
            </form>
        </MuiThemeProvider>
    )
} 