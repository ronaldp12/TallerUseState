import { ColorGenerator } from "../../Layouts/absoluteColors/AbsoluteColors.jsx";
import { DarkLightMode } from "../../Layouts/DarkLightMode/DarkLightMode.jsx"
import { LikeDislikeBtn } from "../../Layouts/LikeDislikeBtn/LikeDislikeBtn.jsx";
import { SecondsCounter } from "../../Layouts/SecondsCounter/SecondsCounter.jsx";
import './Home.css';
import { useState } from "react";

export const Home = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    const HandleMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className={`StyleHome ${isDarkMode ? 'dark' : 'light'}`}>
            <DarkLightMode style={"containerMode"} isDarkMode={isDarkMode} HandleMode={HandleMode} />
            <LikeDislikeBtn/>
            <ColorGenerator/>
            <SecondsCounter/>
        </div>
    )
}
