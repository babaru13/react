import React, { useEffect, useState, useCallback } from "react";

import "./app.scss";

const App = ({ title }) => {

    const [messages, addMessages] = useState('Привет', 'Hello', 'Hola', 'Hallo');

    return (
        <div className='full-screen'>
            <div>
                <h1>{title}</h1>
                <br />
                <div className='messages'>
                    {messages.map(text => <span className='messages__item'>{text}</span>)}
                </div>
                <span 
                className='button-line'
                onClick={() => addMessages([...messages, 'Hi'])}>
                    Новое сообщение
                </span>
            </div>
       </div>
   );
};

export default App;