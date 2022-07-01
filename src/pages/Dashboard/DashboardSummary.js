import React from 'react';

const DashboardSummary = () => {
    return (
        <div>
            <div className='grid grid-cols-6 gap-4'>
                <button class="btn gap-2">
                    Items
                    <div class="badge badge-secondary">+99</div>
                </button>
                <button class="btn gap-2">
                    Quantity
                    <div class="badge badge-secondary">+99</div>
                </button>
                <button class="btn gap-2">
                    MRP
                    <div class="badge badge-secondary">+99</div>
                </button>
                <button class="btn gap-2">
                    TP
                    <div class="badge badge-secondary">+99</div>
                </button>
                <button class="btn gap-2">
                    RTN MRP
                    <div class="badge badge-secondary">+99</div>
                </button>
                <button class="btn gap-2">
                    RTN TP
                    <div class="badge badge-secondary">+99</div>
                </button>
                <button class="btn gap-2">
                    Discount
                    <div class="badge badge-secondary">+99</div>
                </button>
                <button class="btn gap-2">
                    Net Sale
                    <div class="badge badge-secondary">+99</div>
                </button>
                <button class="btn gap-2">
                    Net TP
                    <div class="badge badge-secondary">+99</div>
                </button>
                <button class="btn gap-2">
                    From
                    <div class="badge badge-secondary">+99</div>
                </button>
                <button class="btn gap-2">
                    To
                    <div class="badge badge-secondary">+99</div>
                </button>
                <button class="btn gap-2">
                    Period
                    <div class="badge badge-secondary">+99</div>
                </button>
            </div>

            <div className='flex justify-between mt-6'>
                <button class="btn gap-2">
                    Refresh
                </button>
                <button class="btn gap-2">
                    Print
                </button>
            </div>
        </div>
    );
};

export default DashboardSummary;