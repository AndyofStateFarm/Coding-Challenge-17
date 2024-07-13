import React from 'react';
import './FancyText.css';

const FancyText = ({ title, text }) => {
    return (
        <div className={title ? 'title' : 'motivate'}>
            {text}
        </div>
    );
}

export default FancyText;