import React from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import { App } from "./app";
import { Home } from "./home";
import { Profile } from "./profile";
import { ChatList } from "./chatList";

export const Routes = () => (
   <BrowserRouter>
        <div className="layout">
            <ul className="nav">
                <li className="nav__item"><Link to="/">Home</Link></li>
                <li className="nav__item"><Link to="/chats">Chats</Link></li>
                <li className="nav__item"><Link to="/profile">Profile</Link></li>
            </ul>
    		<Switch>
    			<Route exact path="/">
    				<Home />
    			</Route>
                <Route exact path="/chats">
                    <ChatList />
                </Route>
                <Route path="/profile/">
                    <Profile />
                </Route>
    			<Route path="/chats/:chatId">
                    <App />
    			</Route>
    		</Switch>
        </div>
    </BrowserRouter>
);