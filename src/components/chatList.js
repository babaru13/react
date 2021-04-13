import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import AddIcon from '@material-ui/icons/Add';
import {Fab, TextField, List, ListItem, ListItemText} from '@material-ui/core';

import { selectChats } from "../store/chats/selectors";
import { useSelector, useDispatch } from "react-redux";
import { addChat } from "../store/chats/actions";

export const ChatList = () => {
	  const [chatName, setChatName] = useState('');
	  const chats = useSelector(selectChats);
	  const dispatch = useDispatch();

    const handleChange = (e) => {
        setChatName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
	    dispatch(addChat(chatName));
	    setChatName('');
    }

    return (
        <div className="chat-list">
		    <List>
                {chats.map((chat) => (
                	<ListItem button className="chat-list__item" key={chat.id}>
                		<Link to={`/chats/${chat.id}`}>{chat.name}</Link>
                	</ListItem>
                ))}
		    </List>
			<form 
			onSubmit={handleSubmit}
			className="form">
                <TextField
                    label="Новый чат"
                    type="text"
                    value={chatName}
                    required
                    className="form__field"
                    onChange={handleChange}
                />
                <Fab 
                    color="secondary"
                    type="submit"
                    className="form__button">
                    <AddIcon />
                </Fab>
			</form>
        </div>
    )
}