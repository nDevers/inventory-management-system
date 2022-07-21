import React from 'react';
import DeleteButton from '../../../../components/Buttons/DeleteButton';
import EditButton from '../../../../components/Buttons/EditButton';

const PharmacyItemsRow = ({ index, pharmacyProduct, modalId }) => {
    const updatePharmacyProduct = event => {
        event.preventDefault();

        const tradeName = event?.target?.tradeName?.value;
        const genericName = event?.target?.genericName?.value;
        const strength = event?.target?.strength?.value;
        const packSize = event?.target?.packSize?.value;
        const packTp = event?.target?.packTp?.value;
        const unitTp = event?.target?.unitTp?.value;
        const productAddedBy = 'admin';
        const productAddedToDBAt = new Date();

        const productDetails = { tradeName, genericName, strength, packSize, packTp, unitTp, productAddedBy, productAddedToDBAt };

        // send data to server
        fetch('http://localhost:5000/api/products/pharmacy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success');
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
            <EditButton modalId={modalId} itemId={pharmacyProduct._id} />
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

export default PharmacyItemsRow;