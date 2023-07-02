import { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import {
  DataGrid,GridColDef, GridValueGetterParams
} from '@mui/x-data-grid';
import { Button } from '@mui/material';
import { eventsServices } from '../services/eventsServices';
import ModalEvent from './ModalEvent';

function EventsSection() { 
  const [openModal, setOpenModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [sendId, setSendId] = useState()
  const authrequest =   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjg4MjQzMTk5LCJleHAiOjE2OTA4MzUxOTl9.Swyps8IOPavayQnXlSAgTLDpOLeM4jXRXqW5TmnGFwc";
 
  const handleClickModal = (id) => {
        setSendId(id)
        setOpenModal(true);
        handleClose()
    }
    const handleClose = () => {
      setAnchorEl(null);
    };
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

  
    
  const handleDelete = (id) => {
      
    eventsServices.deleteEvent(authrequest,id)
 }

 

  

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
    {
      field:'options', 
      headerName:'Options', 
      width:300, 
      renderCell: (params) => {
        return  <> 
        <Button onClick={()=>handleClickModal(params.id)}>Edit</Button> 
        <Button onClick={()=> {if (window.confirm('Are you sure you wish to delete this item?')) handleDelete(params.id)}}>Delete</Button>
        </> 
        }
    },
  ];



 

    return(
      <>
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
         <ModalEvent open={openModal} setOpen={setOpenModal} info={sendId}></ModalEvent>
         </>

    );
}
export default EventsSection;