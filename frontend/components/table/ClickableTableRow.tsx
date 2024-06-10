import React from 'react';
import { TableRow, TableCell, Button } from '@mui/material';

interface ClickableTableRowProps {
    rowData: Record<string, any>;
    columns: { headerName: string; field: string }[];
    onClick: (rowData: Record<string, any>) => void;
    onDeleteClick: (id: number) => void;
}

const ClickableTableRow: React.FC<ClickableTableRowProps> = ({ rowData, columns, onClick, onDeleteClick }) => {
    const handleClick = () => {
        onClick(rowData);
    };

    return (
        <TableRow onClick={handleClick} style={{ cursor: 'pointer' }}>
            {columns.map((column) => (
                <TableCell key={column.field}>{rowData[column.field]}</TableCell>
            ))}
            <TableCell>
                <Button variant="outlined" color="secondary" onClick={(e) => { e.stopPropagation(); onDeleteClick(rowData.id); }}>
                    Delete
                </Button>
            </TableCell>
        </TableRow>
    );
};

export default ClickableTableRow;
