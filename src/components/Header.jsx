import React, {useState, useContext} from 'react';
import ThemeContext from '../context/ThemeContext';

const Header = () => {
    const [darkMode,setDarkMode] = useState(false);
    const color = useContext(ThemeContext)
    const handleDarkMode = () => {
        setDarkMode(!darkMode)
    }
    return (
        <div className='Header'>
            <h1 className="text-3xl lg:text-4xl text-gray-700 font-extrabold" style={{color}}>
                Rick and Morty
            </h1>
            <button 
            type='button' onClick={handleDarkMode}
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                {darkMode ? 'DarkMode' : 'LightMode'}
            </button>
        </div>
    );
};

export default Header;
