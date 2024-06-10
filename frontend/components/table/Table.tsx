import React from 'react';
import { Table as MUITable, TableBody, TableCell, TableHead, TableRow, Paper, Button } from '@mui/material';
import ClickableTableRow from './ClickableTableRow';

interface Column {
    headerName: string;
    field: string;
}

interface TableProps {
    columns: Column[];
    data: Record<string, any>[];
    onRowClick: (rowData: Record<string, any>) => void;
    onDeleteClick: (id: number) => void; // Function to handle delete button click
}

const Table: React.FC<TableProps> = ({ columns, data, onRowClick, onDeleteClick }) => {
    const handleClick = (rowData: Record<string, any>) => {
        console.log('Clicked row data:', rowData);
        onRowClick(rowData);
    };

    return (
        <Paper>
            <MUITable>
                <TableHead>
                    <TableRow>
                        {columns.map((column) => (
                            <TableCell key={column.field}>{column.headerName}</TableCell>
                        ))}
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row, rowIndex) => (
                        <ClickableTableRow key={rowIndex} rowData={row} columns={columns} onClick={handleClick} onDeleteClick={onDeleteClick} />
                    ))}
                </TableBody>
            </MUITable>
        </Paper>
    );
};

export default Table;
