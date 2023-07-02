import React, { useState } from 'react';
import { Typography, Box, TextField, Button, Rating } from '@mui/material';
import CommentList from '../components/CommentList';
import NavBar from '../components/NavBar';

function Forum() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [rating, setRating] = useState(0);

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newComment.trim() !== '') {
      const newCommentObject = {
        id: Date.now(),
        text: newComment.trim(),
        rating: rating,
      };
      setComments([...comments, newCommentObject]);
      setNewComment('');
      setRating(0);
    }
  };

  return (
    <div>
      <NavBar />
      <Box m={2}>
        <Typography variant="h4">Foro</Typography>
        <CommentList comments={comments} />
        <form onSubmit={handleSubmit}>
          <TextField
            label="Escribe tu comentario..."
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={newComment}
            onChange={handleCommentChange}
            margin="normal"
          />
          <Rating
            name="artist-rating"
            value={rating}
            onChange={(event, newValue) => {
              handleRatingChange(newValue);
            }}
            size="large"
          />
          <Button variant="contained" type="submit">
            Agregar comentario
          </Button>
        </form>
      </Box>
    </div>
  );
}

export default Forum;
