import React from 'react';
import { useSelector } from 'react-redux';
import { Table, TableBody, TableRow, CircularProgress, TableCell } from '@material-ui/core';

const Projects = () => {
    const bugs = useSelector((state) => state.bugs);
    return (
        !bugs.length ? (
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <CircularProgress />
            </div>) : (
                <Table>
                    <TableBody>
                        {bugs.map((bug) => (
                            <TableRow key={bug.id}>
                                <TableCell>{bug.project}</TableCell>
                                <TableCell>{bug.creator}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            )
        
    )
}

export default Projects
