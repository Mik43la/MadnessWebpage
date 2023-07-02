import React, { useEffect, useState } from 'react';
import {
  DataGrid,
  GridColDef,
  GridValueGetterParams,
  GridCellParams,
} from '@mui/x-data-grid';
import StarIcon from '@mui/icons-material/Star';
import Button from '@mui/material/Button';
import CustomModal from './CustomModal';

function RatingCell({ value }: GridValueGetterParams) {
  const rating = parseFloat(value as string);

  if (isNaN(rating)) {
    return null;
  }

  const stars = Math.round(rating);
  const starIcons = Array.from({ length: stars }, (_, index) => (
    <StarIcon key={index} />
  ));

  return <div>{starIcons}</div>;
}

function ArtistsSection() {
  const [tableData, setTableData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedArtist, setSelectedArtist] = useState(null);

  useEffect(() => {
    updateTable();
  }, []);

  const updateTable = async () => {
    try {
      const response = await fetch('http://localhost:1337/api/artists');
      const data = await response.json();
      setTableData(data.data);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const columns: GridColDef[] = [
    {
      field: 'name',
      headerName: 'Name',
      width: 250,
      valueGetter: (params: GridValueGetterParams) => params.row.attributes.name,
    },
    {
      field: 'rating',
      headerName: 'Rating',
      width: 210,
      renderCell: (params: GridCellParams) => (
        <RatingCell value={params.row.attributes.rating} />
      ),
    },
  ];

  const tableStyles = {
    height: 400,
    width: '100%',
    backgroundColor: '#EDE7F6',
    margin: 'auto',
  };

  return (
    <div>
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
      </div>
      <CustomModal open={openModal} onClose={handleCloseModal} artist={selectedArtist} />
    </div>
  );
}

export default ArtistsSection;
