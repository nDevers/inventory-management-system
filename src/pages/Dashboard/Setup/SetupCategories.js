import React from 'react';

const SetupCategories = () => {
    return (
        <div>
            <h2>Setup Category</h2>

            <div className='grid grid-cols-3'>
                <div>
                    <label class="label">
                        <span class="label-text">Trade Name</span>
                    </label>
                    <input type="text" placeholder="Type here" class="input input-sm input-bordered w-full max-w-xs" />
                </div>

                <div>
                    <label class="label">
                        <span class="label-text">Trade Name</span>
                    </label>
                    <input type="text" placeholder="Type here" class="input input-sm input-bordered w-full max-w-xs" />
                </div>

                <div className="div">
                    <label class="label">
                        <span class="label-text">Category</span>
                    </label>
                    <select class="select select-bordered select-sm w-full max-w-xs">
                        <option disabled selected>Small</option>
                        <option>Small Apple</option>
                        <option>Small Orange</option>
                        <option>Small Tomato</option>
                    </select>
                </div>
            </div>

            <div className='flex justify-around items-center my-6'>
                <button class="btn btn-sm gap-2">
                    Save
                </button>
                <button class="btn btn-sm gap-2">
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default SetupCategories;