import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const CustomModal = ({ open, onClose, event }) => {
  const [creditCard, setCreditCard] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleBuyTicket = () => {
    // Check if credit card and phone number are provided
    if (creditCard && phoneNumber) {
      // Perform logic for purchasing a ticket
      console.log('Buy ticket for event:', event);
      onClose();
    } else {
      alert('Please provide credit card information and phone number.');
    }
  };

  const handleForum = () => {
    // Logic to go to the forum of the selected event
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
        <TextField
          label="Credit Card"
          value={creditCard}
          onChange={(e) => setCreditCard(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Typography variant="caption" display="block" gutterBottom>
          * Only one ticket can be purchased per account.
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
