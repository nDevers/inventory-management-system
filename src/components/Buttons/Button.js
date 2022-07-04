import React from 'react';

const Button = ({ btnText }) => {
    return (
        <button class="btn btn-primary btn-md w-full text-white">{btnText}</button>
    );
};

export default Button;