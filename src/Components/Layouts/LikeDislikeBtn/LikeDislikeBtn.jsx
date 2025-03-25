import React, { useState } from 'react';

export const LikeDislikeBtn = ({style}) => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLike= () =>{
    setLikes(likes+ 1)
  }

  const handleDislikes= ()=>{
    setDislikes(dislikes+ 1)
  }

  return (
    <div className={style}>
      <button onClick={handleLike}>Like <i class="bi bi-hand-thumbs-up"></i> ({likes})</button>
      <button onClick={handleDislikes} style={{ marginLeft: '10px' }}>
        Dislike <i class="bi bi-hand-thumbs-down"></i> ({dislikes})
      </button>
    </div>
  );
};