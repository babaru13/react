import React, { useEffect, useState, useCallback } from "react";

import "./app.scss";

import { AUTHORS } from "../utils/constants";
import Form from "./form";

const App = ({ title }) => {

    const [messages, addMessage] = useState([]);

    const setMessage = useCallback((newMessage) => {
        addMessage((prevMessage) => [...prevMessage, newMessage])
    }, []);

    useEffect(() => {
        let timeout;

        if(messages[messages.length -1]?.author !== AUTHORS.BOT) {
            timeout = setTimeout(() => {
                setMessage({text: 'Привет!', author: AUTHORS.BOT})
            }, 500);
        }

        return () => clearTimeout(timeout);
    }, [messages]);

    return (
        <div className="full-screen">
            <div>
                <h1>{title}</h1>
                <br />
                <div className="messages">
                    {messages.map(({ text, author }, i) => (
                        <span className="messages__item" key={i}>{author}: {text}</span>
                    ))}
                </div>
                <Form onSetMessage={setMessage} />
            </div>
       </div>
   );
};

export default App;