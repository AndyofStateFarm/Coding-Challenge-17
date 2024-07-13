import React from 'react';
import './FancyText.css';

const FancyText = ({ title, text }) => {
    return (
        <div className={title ? 'title' : 'main'}>
            {text}
        </div>
    );
}

export default FancyText;