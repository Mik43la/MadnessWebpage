import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import EditArtist from './EditArtist';
import { useParams, useNavigate } from "react-router-dom";
import useFetch from '../../hooks/useFetch';


const ModalArtist = ({ open, setOpen}) => {
    const {dataId} = useParams();
    const {loading, error, data } = useFetch('http://localhost:1337/artists/' +dataId)
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
       
        <EditArtist info={data} open={open} setOpen={setOpen}></EditArtist>
         
         
      </Dialog>
    </>
      
     
    );
  };
  
  export default ModalArtist;