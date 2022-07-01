import React from 'react';
import ProductsRow from './ProductsRow';
import { confirmAlert } from 'react-confirm-alert';

const createProduct = event => {
    confirmAlert({
        customUI: ({ onClose }) => {
            return (
                <div className='bg-gradient-to-r from-primary to-secondary p-8 text-white rounded-lg w-96'>
                    <h1 className='text-xl mb-4'>Are you sure?</h1>
                    <p>Your post will be public so be careful before proceed.</p>

                    <div className='flex justify-between mt-8'>
                        <button className='btn btn-info w-36 flex items-center' onClick={onClose}>
                            Cancel
                        </button>

                        <button className='btn btn-info w-36 flex items-center'>
                            Confirm
                        </button>
                    </div>
                </div>
            );
        }
    });

    event.target.reset();
};

const Products = () => {
    return (
        <section>
            <label for="my-modal-6" class="btn modal-button">open modal</label>

            <div className="flex justify-between mb-6">
                <button for="my-modal" class="btn modal-button gap-2">
                    New
                </button>
                <button class="btn gap-2">
                    Print
                </button>
            </div>

            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box w-11/12 max-w-5xl">
                    <h3 class="font-bold text-lg mb-4">Create a Product</h3>

                    <div className='flex justify-between gap-4'>
                        <input type="text" placeholder="Type here" class="input input-bordered input-sm w-full max-w-xs" />
                        <input type="text" placeholder="Type here" class="input input-bordered input-sm w-full max-w-xs" />
                        <input type="text" placeholder="Type here" class="input input-bordered input-sm w-full max-w-xs" />

                    </div>
                    <div class="modal-action">
                        <label for="my-modal-6" class="btn">Yay!</label>
                    </div>
                </div>
            </div>

            <table class="table table-zebra table-compact w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>company</th>
                        <th>location</th>
                        <th>Last Login</th>
                        <th>Favorite Color</th>
                    </tr>
                </thead>
                <tbody>
                    <ProductsRow />
                    <ProductsRow />
                    <ProductsRow />
                    <ProductsRow />
                </tbody>
                <tfoot>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>company</th>
                        <th>location</th>
                        <th>Last Login</th>
                        <th>Favorite Color</th>
                    </tr>
                </tfoot>
            </table>
        </section >
    );
};

export default Products;