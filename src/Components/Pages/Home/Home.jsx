import { ColorGenerator } from "../../Layouts/absoluteColors/AbsoluteColors.jsx";
import { DarkLightMode } from "../../Layouts/DarkLightMode/DarkLightMode.jsx"
import { LikeDislikeBtn } from "../../Layouts/LikeDislikeBtn/LikeDislikeBtn.jsx";
import { SecondsCounter } from "../../Layouts/SecondsCounter/SecondsCounter.jsx";
import { useState } from "react";

export const Home = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    const HandleMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className={`StyleHome ${isDarkMode ? 'dark' : 'light'}`}>
            <DarkLightMode styleBtn={"btn-dark-light"} style={"containerMode"} isDarkMode={isDarkMode} HandleMode={HandleMode} />
            <LikeDislikeBtn style={"containerLikeDislike"}/>
            <ColorGenerator style={"containerColors"}/>
            <SecondsCounter style={"containerCounter"}/>
        </div>
    )
}
