import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef, GridValueGetterParams, GridCellParams } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import CustomModal from './CustomModal';
import ModalPassword from './ModalPassword';

function EventsSection() {
  const [tableData, setTableData] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);

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

  const handlePasswordSubmit = (password) => {
    if (password === "1234") {
      setShowPasswordModal(false);
      window.location.href = '/user/forum'; // Redirige al usuario a la ruta del foro
    } else {
      alert('Incorrect password. Please try again.');
    }
  };

  const handleCommentButtonClick = () => {
    if (openModal) {
      setOpenModal(false);
      setShowPasswordModal(true);
    } else {
      setShowPasswordModal(true);
    }
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
      field: 'buyTicket',
      headerName: 'Buy Ticket',
      width: 150,
      renderCell: (params: GridCellParams) => (
        <Button variant="outlined" onClick={() => handleBuyTicket(params)}>
          Buy Ticket
        </Button>
      ),
    },
    {
      field: 'forum',
      headerName: 'Forum',
      width: 150,
      renderCell: () => (
        <Button variant="outlined" onClick={handleCommentButtonClick}>
          Forum
        </Button>
      ),
    },
  ];

  const tableStyles = {
    height: 400,
    width: '100%',
    backgroundColor: '#EDE7F6', // Color de fondo morado pastel
    margin: 'auto', // Centrar la tabla horizontalmente
  };

  return (
    <div style={tableStyles}>
      <DataGrid
        rows={tableData}
        columns={columns}
        disableColumnFilter
        disableColumnMenu
        disableDensitySelector
        disableColumnSelector
        disableToolbar
        disableRowSelectionOnClick
      />
      {selectedEvent && (
        <>
          {showPasswordModal && (
            <ModalPassword
              open={showPasswordModal}
              onClose={() => setShowPasswordModal(false)}
              onSubmit={handlePasswordSubmit}
            />
          )}
          <CustomModal
            open={openModal}
            onClose={handleModalClose}
            event={selectedEvent}
          />
        </>
      )}
    </div>
  );
}

export default EventsSection;
