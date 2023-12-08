'use client'
import React from 'react';
import { ThemeContext } from './ThemeProvider';


const ThemeToggleButton = () => {

    const [theme,setTheme]=React.useContext(ThemeContext);
    
    return (
       <>
       <button onClick={toggletheme}>Toggle local theme to {theme === 'light' ? 'dark' : 'light'}</button>
       </>
    )

}
export {ThemeToggleButton}