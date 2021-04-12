import React from "react";
import { useSelector } from 'react-redux';

export const Header = () => {
	const name = useSelector(state => state.profile.name);
	
    return (
        <div className="header">
            <h1>{name}</h1>
        </div>
    );
};