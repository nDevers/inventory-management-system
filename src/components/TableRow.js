import React from 'react';

const TableRow = ({ tableRowsData }) => {
    return (
        <tr>
            {
                tableRowsData?.map((tableRowData, index) =>
                    <td key={index}>{tableRowData}</td>)
            }
        </tr>
    );
};

export default TableRow;