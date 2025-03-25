import { DarkLightMode } from "../../Layouts/DarkLightMode/DarkLightMode.jsx"
import { LikeDislikeBtn } from "../../Layouts/LikeDislikeBtn/LikeDislikeBtn.jsx";
import './Home.css';
import { useState } from "react";

export const Home = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    const HandleMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className={`StyleHome ${isDarkMode ? 'dark' : 'light'}`}>
            <DarkLightMode isDarkMode={isDarkMode} HandleMode={HandleMode} />
            <LikeDislikeBtn/>
        </div>
    )
}
