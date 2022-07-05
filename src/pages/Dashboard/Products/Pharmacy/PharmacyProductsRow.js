import React from 'react';

const PharmacyProductsRow = () => {
    const tableRowsData = [`1`, `Cy Ganderton 11`, `Quality Control`, `Littel, Schaden and Vandervort`, `Canada`, `12/16/2020`, `Blue`];

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