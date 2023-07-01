import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef, GridValueGetterParams, GridCellParams } from '@mui/x-data-grid';
import Button from '@mui/material/Button';

function generateRandom() {
  var length = 8,
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

function EventsSection() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    updateTable();
  }, []);

  const updateTable = () => {
    const testData = [
      { id: 1, name: 'Event 1', date: new Date('2023-07-01'), onSale: 'Yes' },
      { id: 2, name: 'Event 2', date: new Date('2023-07-02'), onSale: 'No' },
      { id: 3, name: 'Event 3', date: new Date('2023-07-03'), onSale: 'Yes' },
    ];
    setTableData(testData);
  };
  

  const handleBuyTicket = (params: GridCellParams) => {
    console.log('Buy ticket for event:', params.row);
  };

  const handleForum = (params: GridCellParams) => {
    console.log('Go to forum for event:', params.row);
  };

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 200 },
    { field: 'name', headerName: 'Name', width: 250 },
    { field: 'date', headerName: 'Date', type: 'date', width: 210 },
    { field: 'onSale', headerName: 'On Sale', width: 210 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 200,
      renderCell: (params: GridCellParams) => (
        <div>
          <Button variant="outlined" onClick={() => handleBuyTicket(params)}>
            Buy Ticket
          </Button>
          <Button variant="outlined" onClick={() => handleForum(params)}>
            Forum
          </Button>
        </div>
      ),
    },
  ];

  const tableStyles = {
    height: 400,
    width: '100%',
    backgroundColor: '#E1BEE7', // Color de fondo morado pastel
    margin: 'auto', // Centrar la tabla horizontalmente
  };

  return (
    <div style={tableStyles}>
      <DataGrid
        rows={tableData}
        columns={columns}
        checkboxSelection
        disableColumnFilter // Eliminar los filtros de columna
        disableColumnMenu // Eliminar el menú de columna
        disableDensitySelector // Eliminar el selector de densidad
        disableColumnSelector // Eliminar el selector de columnas
        disableToolbar // Eliminar la barra de herramientas
        disableRowSelectionOnClick // Deshabilitar la selección de fila al hacer clic
      />
    </div>
  );
}

export default EventsSection;
