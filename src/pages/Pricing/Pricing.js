import React from 'react';
import PricingCard from './PricingCard';

const Pricing = () => {
    return (
        <div className='grid grid-cols-4 gap-8'>
            <PricingCard />
            <PricingCard />
            <PricingCard />
            <PricingCard />
        </div>
    );
};

export default Pricing;