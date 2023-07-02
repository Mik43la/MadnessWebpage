import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function CommentList({ comments }) {
  comments = [
    {
      id: 1,
      text: 'Hola',
      username: 'User1',
    },
    {
      id: 2,
      text: 'Adios',
      username: 'User2',
    },
  ];

  return (
    <div>
      {comments.map((comment) => (
        <Card key={comment.id} variant="outlined" style={{ marginBottom: '10px' }}>
          <CardContent>
            <Typography variant="body1" component="div">
              <strong>Username: </strong>
              {comment.username}
            </Typography>
            <Typography variant="body2" component="div">
              <strong>Comment: </strong>
              {comment.text}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default CommentList;
