import React, { Component } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(organization, category, type, distance, number) {
  return { organization, category, type, distance, number };
}

const rows = [
  createData('AIIMS Bhubaneswar', 'Government', 'Basic', '2 km', '+91565645515616'),
  createData('SCB Medical', 'Government', 'Advance', '5 km', '+91565645515616'),
  createData('Kalinga Hospital', 'Private', 'Mortuary', '10 km', '+91565645515616'),
  createData('Apollo Medicals', 'Private', 'Patient Transfer', '13 km', '+91565645515616'),
  createData('AMRI Hospital', 'Private', 'Air Ambulance', '20 km', '+91565645515616'),
];

export default function CustomizedTables() {
  return (
    <>
    <h2 style = {{ paddingTop: '60px', paddingLeft: '20px' }}><b>Emergency Services</b></h2>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableRow>
            <StyledTableCell align="center">Organization Name</StyledTableCell>
            <StyledTableCell align="center">Category</StyledTableCell>
            <StyledTableCell align="center">Type</StyledTableCell>
            <StyledTableCell align="center">Distance Radius&nbsp;(km)</StyledTableCell>
            <StyledTableCell align="center">Ambulance Number</StyledTableCell>
          </TableRow>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell align="center">
                {row.organization}
              </StyledTableCell>
              <StyledTableCell align="center">{row.category}</StyledTableCell>
              <StyledTableCell align="center">{row.type}</StyledTableCell>
              <StyledTableCell align="center">{row.distance}</StyledTableCell>
              <StyledTableCell align="center">{row.number}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
