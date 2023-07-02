import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef, GridValueGetterParams, GridCellParams } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import CustomModal from './CustomModal';

function EventsSection() {
  const [tableData, setTableData] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    updateTable();
  }, []);

  const updateTable = async () => {
    try {
      const response = await fetch('http://localhost:1337/api/events');
      const data = await response.json();
      setTableData(data.data);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  const handleBuyTicket = (params: GridCellParams) => {
    const event = params.row;
    setSelectedEvent(event);
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

  const columns: GridColDef[] = [
    { field: 'name', headerName: 'Name', width: 250,
      renderCell: (params: GridCellParams) => params.row.attributes.name },
    {
      field: 'date',
      headerName: 'Date',
      type: 'date',
      width: 210,
      renderCell: (params: GridCellParams) => {
        const date = new Date(params.row.attributes.date);
        const formattedDate = date.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        });
        return formattedDate;
      },
    },
    { field: 'onSale', headerName: 'On Sale', width: 210,
      renderCell: (params: GridCellParams) => params.row.attributes.onSale ? 'Yes' : 'No',
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 200,
      renderCell: (params: GridCellParams) => (
        <div>
          <Button variant="outlined" onClick={() => handleBuyTicket(params)}>
            Buy Ticket
          </Button>
          <Button variant="outlined" >
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
        disableColumnFilter
        disableColumnMenu
        disableDensitySelector
        disableColumnSelector
        disableToolbar
        disableRowSelectionOnClick
      />
      {selectedEvent && (
        <CustomModal
          open={openModal}
          onClose={handleModalClose}
          event={selectedEvent}
        />
      )}
    </div>
  );
}

export default EventsSection;
