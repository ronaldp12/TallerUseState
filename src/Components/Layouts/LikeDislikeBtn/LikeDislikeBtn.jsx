import React, { useState } from 'react';

export const LikeDislikeBtn = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLike= () =>{
    setLikes(likes+ 1)
  }

  const handleDislikes= ()=>{
    setDislikes(dislikes+ 1)
  }

  return (
    <div>
      <button onClick={handleLike}>Like ({likes})</button>
      <button onClick={handleDislikes} style={{ marginLeft: '10px' }}>
        Dislike ({dislikes})
      </button>
    </div>
  );
};