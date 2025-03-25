import React, { useState } from 'react';

export const AbsoluteColors = [
    "#FF0000", "#00FF00", "#0000FF",
    "#FFFF00", "#FF00FF", "#00FFFF",
    "#000000", "#FFFFFF", "#808080",
    "#800000", "#808000", "#800080",
    "#008080", "#C0C0C0", "#FFA500",
    "#A52A2A"
];

export const ColorGenerator = () => {
    const [color, setColor] = useState('#FFFFFF');

    const HandleColor = () => {
        const randomColor = AbsoluteColors[Math.floor(Math.random() * AbsoluteColors.length)];
        setColor(randomColor);
    };

    return (
        <div style={{ backgroundColor: color, height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <button onClick={HandleColor}>Generar Color</button>
            <p style={{ color: color === '#000000' ? '#FFF' : '#000' }}>Color actual: {color}</p>
        </div>
    );
};