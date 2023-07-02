import React from 'react';
import PropTypes from 'prop-types';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const CustomModal = ({ open, onClose, event }) => {
  const handleBuyTicket = () => {
    // Lógica para comprar boletos del evento seleccionado
    console.log('Buy ticket for event:', event);
    onClose();
  };

  const handleForum = () => {
    // Lógica para ir al foro del evento seleccionado
    console.log('Go to forum for event:', event);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h5" mb={2}>
          Event: {event?.attributes?.name}
        </Typography>
        <Typography variant="body1" mb={2}>
          Stage name: {event?.attributes?.stage}
        </Typography>
        <Button variant="contained" onClick={handleBuyTicket}>
          Buy Ticket
        </Button>
      </Box>
    </Modal>
  );
};

CustomModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  event: PropTypes.object,
};

export default CustomModal;
