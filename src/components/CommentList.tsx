import React from 'react';
import { CommentListContainer, Comment } from './CommentList_Styles';

interface CommentListProps {
  comments: string[];
}

const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  return (
    <CommentListContainer>
      {comments.map((comment, index) => (
        <Comment key={index}>{comment}</Comment>
      ))}
    </CommentListContainer>
  );
};

export default CommentList;