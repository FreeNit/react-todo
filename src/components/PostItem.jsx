import React from 'react';

export default function PostItem({ post }) {
  return (
    <div className='post'>
      <div className='post__content'>
        <strong>
          {post.id}. {post.title}
        </strong>
        <div>{post.body}</div>
      </div>
      <div className='post__btns'>
        <button>Delete</button>
      </div>
    </div>
  );
}
