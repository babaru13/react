import React from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import { App } from "./app";
import { Home } from "./home";
import { Profile, ConnectedProfile } from "./profile";
import { ChatList } from "./chatList";
import { Header } from "./header";

export const Routes = () => (
   <BrowserRouter>
        <div className="layout">
            <Header />
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
                <Route exact path="/profile/">
                    <ConnectedProfile />
                </Route>
    			<Route path="/chats/:chatId">
                    <App />
    			</Route>
    		</Switch>
        </div>
    </BrowserRouter>
);