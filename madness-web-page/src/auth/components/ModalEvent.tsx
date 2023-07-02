import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import EditArtist from './EditArtist';
import { useParams, useNavigate } from "react-router-dom";
import useFetch from '../../hooks/useFetch';
import {useState, useEffect } from 'react';
import EditEvent from './EditEvent';


const ModalEvent = ({ open, setOpen, info}) => {


     console.log(info,"infoo")

    const [dataId, setDataId] =useState();

    useEffect(()=> {
      setDataId(info)
    },[open])


    const handleClick = () => {
        setOpen(!open);
      };
    
    return (
     
    <>
    
    <Dialog
        open={open}
        onClose={handleClick}
        scroll="paper"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">{`${dataId ? "Edit" : "Create"}`}</DialogTitle>
   
        <EditEvent info={dataId} open={open} setOpen={setOpen}></EditEvent>
         
         
      </Dialog>
    </>
      
     
    );
  };
  
  export default ModalEvent;