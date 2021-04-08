import React, { useEffect, useState, useCallback } from "react";

import {FontIcon, Chip} from "@material-ui/core";

import "./app.scss";

import { AUTHORS } from "../utils/constants";
import Form from "./form";
import Header from "./header";
import ChatList from "./chatList";

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
            }, 800);
        }

        return () => clearTimeout(timeout);
    }, [messages]);

    return (
        <div className="layout">
            <Header title={title} />
            <br />
            <div className="row">
                <div className="col-60">
                    <div className="messages">
                        {messages.map(({ text, author }, i) => (
                            <Chip 
                            className={`messages__item ${author === AUTHORS.BOT ? 'messages__item_first' : 'messages__item_second'}`}                          
                            label={`${author}: ${text}`}
                            />
                        ))}
                    </div>
                    <Form onSetMessage={setMessage} />
                </div>
                <div className="col-40">
                    <ChatList />
                </div>
            </div>
        </div>
   );
};

export default App;