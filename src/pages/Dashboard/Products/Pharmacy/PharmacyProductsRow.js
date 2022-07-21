import React from 'react';
import DeleteButton from '../../../../components/Buttons/DeleteButton';
import EditButton from '../../../../components/Buttons/EditButton';

const PharmacyProductsRow = ({ index, pharmacyProduct }) => {
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
            <DeleteButton />
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