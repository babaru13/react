import React, {  useState } from "react";

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
        <form 
        onSubmit={handleSubmit}
        className="form">
            <input
            className="form__field"
            placeholder="Введите сообщение"
            type="text"
            value={value}
            minlength="3"
            required
            onChange={handleChange}
            />
            <button  
            className="form__button"
            type="submit">
                Отправить
            </button>
        </form>
    )
}