import NavBar from "../components/NavBar";
import ArtistsSection from "../components/ArtistsSection";
import { Button } from "@mui/material";
import * as React from 'react';
import ModalArtist from "../components/ModalArtist";

function ArtistsPage() {
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
        <div className="p-6 mx-10 flex flex-start">
            <p>
                Artists
            </p>
        </div>
        <div className="flex flex-end">
                <Button onClick={handleClickModal}>Crear</Button>
            </div>
        <div className="pb-10 pt-5 pl-10 pr-10 mx-auto ">
            <ArtistsSection></ArtistsSection>
        </div>
        <ModalArtist open={openModal} setOpen={setOpenModal} ></ModalArtist>
        </>
    );
}

export default ArtistsPage;