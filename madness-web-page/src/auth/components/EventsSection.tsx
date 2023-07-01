import { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import {
  DataGrid,GridColDef, GridValueGetterParams
} from '@mui/x-data-grid';
import { randomNumberBetween } from '@mui/x-data-grid/utils/utils';

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
  
  const [tableData, setTableData] = useState([])

  useEffect(()=>{
    updateTable()
    console.log(tableData)
  })

  const {loading, error, data} = useFetch('http://localhost:1337/api/events');

  const updateTable = () => {
    if(data && !loading && tableData.length === 0){
      console.log(data, "AAAAA")
        setTableData([ ...tableData,  ...data])
    }
  }

  if(loading) return <p> Loading...</p>
  if(error) return <p> AAA</p>

  
   
  

  const columns:  GridColDef[]= [
    { field: 'id', headerName: 'ID', width: 200 },
    {
      field: 'name',
      headerName: 'Name',
      width: 250,
      valueGetter: (params:GridValueGetterParams ) => params.row.attributes.name,
    },
    {
      field: 'date',
      headerName: 'Date',
      type: 'number',
      width: 210,
      valueGetter: (params:GridValueGetterParams ) => params.row.attributes.date,
    },
    {
      field: 'onSale',
      headerName: 'On Sale',
      type: 'number',
      width: 210,
      valueGetter: (params:GridValueGetterParams ) => params.row.attributes.onSale,
    },
  ];



 

    return(
      
      <div style={{ height: 400, width: '100%' }}>
        
      <DataGrid
        rows={tableData}
        columns={columns}
     //   getRowId={(row: any) => generateRandom()}
        experimentalFeatures={{ columnGrouping: true }}
        checkboxSelection
        disableRowSelectionOnClick
        //columnGroupingModel={columnGroupingModel}
      />
    </div>
    );
}
export default EventsSection;