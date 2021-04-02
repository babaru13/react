import React from "react";

import {List, ListItem, ListItemText} from '@material-ui/core';

import {CHAT_LIST} from "../utils/constants";

export default function ChatList() {

    return (
        <div className="chat-list">
		    <List>
                {CHAT_LIST.map((name, i) => (
                	<ListItem button className="chat-list__item">
                		<ListItemText primary={name} />
                	</ListItem>
                ))}
		    </List>
        </div>
    )
}