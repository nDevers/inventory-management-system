import React from 'react';

const InfoCard = ({ name, status }) => {
    return (
        <button class="btn gap-2 btn-sm md:btn-md lg-btn-lg">
            {name}
            <div class="badge badge-secondary">+{status}</div>
        </button>
    );
};

export default InfoCard;