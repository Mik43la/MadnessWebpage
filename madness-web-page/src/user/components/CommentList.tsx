import React from 'react';

function CommentList({ comments }) {
    comments = [
        {
            id: 1,
            text: 'Hola',
        },
        {
            id: 2,
            text: 'Adios',
        },
    ];
    
  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.id}>{comment.text}</div>
      ))}
    </div>
  );
}

export default CommentList;
