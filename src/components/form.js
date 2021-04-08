import React, { useState } from "react";

import SendIcon from '@material-ui/icons/Send';
import {Fab, TextField, Chip} from "@material-ui/core";

import {AUTHORS} from "../utils/constants";

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
        <form 
        onSubmit={handleSubmit}
        className="form">
            <div className="form__row">
                <TextField
                    label="Введите сообщение"
                    type="text"
                    value={value}
                    required
                    className="form__field"
                    onChange={handleChange}
                />
                <Fab 
                    color="primary"
                    type="submit"
                    className="form__button">
                    <SendIcon />
                </Fab>
            </div>
        </form>
    )
} 