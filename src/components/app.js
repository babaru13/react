import React, { useEffect, useState, useCallback } from "react";

import {cyan100, lightGreenA100} from "material-ui/styles/colors";
import {FontIcon, Chip, MuiThemeProvider} from "material-ui";

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
        <MuiThemeProvider>
            <div className="layout">
                <Header title={title} />
                <br />
                <div className="row">
                    <div className="col-60">
                        <div className="messages">
                            {messages.map(({ text, author }, i) => (
                                <Chip 
                                className="messages__item"
                                key={i} 
                                backgroundColor={author === AUTHORS.BOT ? cyan100 : lightGreenA100}>
                                  {author}: {text}
                                </Chip>
                            ))}
                        </div>
                        <Form onSetMessage={setMessage} />
                    </div>
                    <div className="col-40">
                        <ChatList />  
                    </div>
                </div>
            </div>
        </MuiThemeProvider>
   );
};

export default App;