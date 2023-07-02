import { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import {
  DataGrid,GridColDef, GridValueGetterParams
} from '@mui/x-data-grid';
import Button from '@mui/material/Button/Button';
import ModalArtist from './ModalArtist';
import { artistService } from '../services/artistsServices';
import {authService} from '../services/authService'




function ArtistsSection() { 

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

  const {loading, error, data} = useFetch('http://localhost:1337/api/artists');

  const updateTable = () => {
    if(data && !loading && tableData.length === 0){
      console.log(data, "AAAAA")
        setTableData([ ...tableData,  ...data])
    }
  }

  if(loading) return <p> Loading...</p>
  if(error) return <p> AAA</p>

  
   const handleDelete = (id) => {
      
      artistService.deleteArtist(authrequest,id)
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
      field: 'rating',
      headerName: 'Rating',
      type: 'number',
      width: 210,
      valueGetter: (params:GridValueGetterParams ) => params.row.attributes.rating,
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
        editMode='cell'
  
        //columnGroupingModel={columnGroupingModel}
      />
      </div>
     <ModalArtist open={openModal} setOpen={setOpenModal} info={sendId}></ModalArtist>
     </>
    );
}
export default ArtistsSection;