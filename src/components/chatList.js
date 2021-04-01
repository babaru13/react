import React from "react";

import {grey300} from 'material-ui/styles/colors';
import {List, ListItem, MuiThemeProvider} from 'material-ui';

import { CHAT_LIST } from "../utils/constants";

export default function ChatList() {

    return (
    	<MuiThemeProvider>
	        <div className="chat-list">
			    <List>
                    {CHAT_LIST.map((name, i) => (
                    	<ListItem 
                    	primaryText={name} 
						className="chat-list__item"
                    	/>
                    ))}
			    </List>
	        </div>
        </MuiThemeProvider>
    )
}