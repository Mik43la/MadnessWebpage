import { useEffect, useState } from 'react';
import {
  DataGrid,
  GridColDef,
  GridValueGetterParams
} from '@mui/x-data-grid';
import StarIcon from '@mui/icons-material/Star';

function generateRandom() {
  var length = 8,
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

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

  useEffect(() => {
    updateTable();
  }, []);

  const updateTable = () => {
    const testData = [
      { id: 1, name: 'Artist 1', rating: '4.5' },
      { id: 2, name: 'Artist 2', rating: '4.2' },
      { id: 3, name: 'Artist 3', rating: '3.8' },
    ];
    setTableData(testData);
  };

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 200 },
    { field: 'name', headerName: 'Name', width: 250 },
    {
      field: 'rating',
      headerName: 'Rating',
      type: 'string',
      width: 210,
      renderCell: RatingCell,
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
        checkboxSelection
        disableColumnFilter // Eliminar los filtros de columna
        disableColumnMenu // Eliminar el menú de columna
        disableDensitySelector // Eliminar el selector de densidad
        disableColumnSelector // Eliminar el selector de columnas
        disableToolbar // Eliminar la barra de herramientas
        disableRowSelectionOnClick
      />
    </div>
  );
}

export default ArtistsSection;
