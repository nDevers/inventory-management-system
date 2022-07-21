import React from 'react';
import DeleteButton from '../../../../components/Buttons/DeleteButton';
import EditButton from '../../../../components/Buttons/EditButton';

const PharmacyProductsRow = ({ index, pharmacyProduct }) => {
    const deletePharmacyProduct = _id => {
        const url = `https://stringlab-ims-server.herokuapp.com/api/products/pharmacy${_id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    console.log('Deleted');
                };
            });
    };

    const tableRowsData = [
        `${index}`,
        `Code Name`,
        `${pharmacyProduct.tradeName}`,
        `Category Name`,
        `${pharmacyProduct.strength}`,
        `Company Name`,
        `${'Available in Stock'}`,
        `Pack Type`,
        `${pharmacyProduct.packSize}`,
        `${pharmacyProduct.packTp}`,
        `MRP`,
        `${pharmacyProduct.unitTp}`,
        `MRP`,
        <span className='flex items-center gap-x-1'>
            <EditButton />
            <DeleteButton deleteApiLink='https://stringlab-ims-server.herokuapp.com/api/products/pharmacy/' itemId={pharmacyProduct._id} />
        </span>
    ];

    return (
        <tr>
            {
                tableRowsData?.map(tableRowData =>
                    <td>{tableRowData}</td>)
            }
        </tr>
    );
};

export default PharmacyProductsRow;