import React, { useEffect, useState, useCallback, useRef, useMemo } from "react";
import { Link, useParams } from "react-router-dom";

import "./app.scss";

import { usePrev } from "../utils/hooks";
import { AUTHORS } from "../utils/constants";
import { Chat } from "./chat";
import { ChatList } from "./chatList";

const initialMessages = {
    id1: [{ text: "Привет!", author: AUTHORS.ME, id: "id1-1" }],
    id2: [{ text: "Hi!", author: AUTHORS.ME, id: "id2-1" }],
    id3: [{ text: "Hola!", author: AUTHORS.BOT, id: "id3-1" }],
};

export const App = () => {
    const { chatId } = useParams();
    console.log(chatId);
    const [messages, addMessage] = useState(initialMessages);
    const setMessage = useCallback((newMessage) => {
        addMessage((prevMessage) => ({
            ...prevMessage,
            [chatId]: [
                ...prevMessage[chatId],
                { ...newMessage, id: prevMessage[chatId].length + 1 },
            ],
        }));
    }, [chatId]);

    useEffect(() => {
        let timeout;
        const lastMessage = messages[chatId]?.[messages[chatId]?.length - 1];

        if(lastMessage?.author === AUTHORS.ME) {
            timeout = setTimeout(() => {
                setMessage({
                    text: 'Привет!', 
                    author: AUTHORS.BOT,
                    id: `${chatId}-${messages[chatId].length + 1}`
                })
            }, 800);
        }

        return () => clearTimeout(timeout);
    }, [messages]);

    return (
        <div>
            <div className="row">
                <div className="col-60">
                    <Chat messages={messages[chatId]} onSetMessage={setMessage} />
                </div>
                <div className="col-40">
                    <ChatList />
                </div>
            </div>
        </div>
    );
};

const PureApp = React.memo(App);