import React from "react";

import { FontIcon, Chip } from "@material-ui/core";
import { AUTHORS } from "../utils/constants";

import Form from "./form";

export const Chat = ({ messages, onSetMessage }) => (
    <div>
        <div className="messages">
            {messages.map(({ text, author, id }) => (
                <Chip 
                key={id}
                className={`messages__item ${author === AUTHORS.BOT ? 'messages__item_first' : 'messages__item_second'}`}                          
                label={`${author}: ${text}`}
                />
            ))}
        </div>
        <Form onSetMessage={onSetMessage} />
    </div>
);



