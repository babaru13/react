import React from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import { App } from "./app";
import { Home } from "./home";
import { ChatList } from "./chatList";

export const Routes = () => (
   <BrowserRouter>
        <Link to="/chats">Chats</Link>
        <ChatList />
		<Switch>
			<Route exact path="/">
				<Home />
			</Route>
			<Route path="/chats/:chatId">
                <App />
			</Route>
		</Switch>
    </BrowserRouter>
);