// src/components/Post.tsx
import React from 'react';
import { PostContainer, PostTitle, PostContent, EditButton, DeleteButton } from './Post_Styles';

interface PostProps {
  title: string;
  content: string;
  onEdit: () => void;
  onDelete: () => void;
}

const Post: React.FC<PostProps> = ({ title, content, onEdit, onDelete }) => {
  return (
    <PostContainer>
      <PostTitle>{title}</PostTitle>
      <PostContent>{content}</PostContent>
      <EditButton onClick={onEdit}>Edit</EditButton>
      <DeleteButton onClick={onDelete}>Delete</DeleteButton>
    </PostContainer>
  );
};

export default Post;