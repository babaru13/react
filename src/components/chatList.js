import React from "react";
import {Link} from 'react-router-dom';
import {List, ListItem, ListItemText} from '@material-ui/core';

import {CHAT_LIST} from "../utils/constants";

export const ChatList = () => {
    return (
        <div className="chat-list">
		    <List>
                {CHAT_LIST.map((chat) => (
                	<ListItem button className="chat-list__item" key={chat.id}>
                		<Link to={`/chats/${chat.id}`}>{chat.name}</Link>
                	</ListItem>
                ))}
		    </List>
        </div>
    )
}