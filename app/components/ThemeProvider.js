'use client'
import React from 'react';
import {useState} from 'react';

const ThemeContext = React.createContext()
const ThemeProvider = (props) =>{
const [theme,setTheme]=useState("light");
const initialValue={
    theme,
    toggletheme:()=>{
        setTheme(theme === 'light' ? 'dark' : 'light');
    }
}
    return (
        <React.Fragment>
            <ThemeContext.provide value={initialValue}>
            {props.children}
            </ThemeContext.provide>
        </React.Fragment>
    )
}

export {ThemeProvider,ThemeContext}