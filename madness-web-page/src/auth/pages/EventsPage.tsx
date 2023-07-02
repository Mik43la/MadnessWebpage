
import { Button } from "@mui/material";
import NavBar from "../components/NavBar";
import EventsSection from "../components/EventsSection";
import * as React from 'react';
import ModalEvent from "../components/ModalEvent";


function EventsPage() {
    const [openModal, setOpenModal] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClickModal = () => {
          setOpenModal(true);
          handleClose()
      }
      const handleClose = () => {
        setAnchorEl(null);
      };
    return (
        <>
        <NavBar></NavBar>
        <div className="p-6 mx-10 flex  justify-between">
            <div className="flex flex-start">
                <p>
                Events
                </p>  
            </div>
            <div className="flex flex-end">
                <Button  onClick={handleClickModal}>Crear</Button>
            </div>
            
        </div>
        <div className="pb-10 pt-5 pl-10 pr-10 mx-auto ">
            <EventsSection></EventsSection>
        </div>
        <ModalEvent open={openModal} setOpen={setOpenModal} info={0} ></ModalEvent>

        </>
    );
}

export default EventsPage;