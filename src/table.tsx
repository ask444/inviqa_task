import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
} from '@mui/material';
import Image from "./Image";
import Ingredients from "./Ingredients";
import Measures from "./Measures";

const imgstyles = {
  height: 25,
  width: 25
};


interface TableProps {
  results: any[];
}


const rowsPerPageOptions: number[] = [5, 10, 25];

const MyTable: React.FC<TableProps> = ({ results }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[0]);
  const defImage = "/src/assets/empty.png";

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const sliceStart = page * rowsPerPage;
  const sliceEnd = sliceStart + rowsPerPage;

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead style={{backgroundColor:'#ddd'}}>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Thumbnail</TableCell>
            <TableCell>Ingredients</TableCell>
            <TableCell>Measurement</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {results.slice(sliceStart, sliceEnd).map((row, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{row.strDrink}</TableCell>
              <TableCell>
                <Image src={row.strDrinkThumb} height={imgstyles.height} width={imgstyles.width} alt={'test'} defaultSrc={defImage}></Image>
              </TableCell>
              <TableCell>
                  <Ingredients defaultData={row}></Ingredients>
              </TableCell>
              <TableCell>
                  <Measures defaultData={row}></Measures>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={rowsPerPageOptions}
        component="div"
        count={results.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
};

export default MyTable;
