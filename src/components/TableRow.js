import React from 'react';

const TableRow = ({ tableRowsData }) => {
    return (
        <tr>
            {
                tableRowsData?.map(tableRowData =>
                    <td>{tableRowData}</td>)
            }
        </tr>
    );
};

export default TableRow;