// src/components/PostList.tsx
import React, { useState } from 'react';
import { useStore } from '../store/store';
import { PostContainer, PostTitle, PostContent } from './PostList_Styles';

interface PostListProps {
    onDeletePost: (id: number) => void;
    onAddComment: (postId: number, comment: string) => void;
}

const PostList: React.FC<PostListProps> = ({ onDeletePost, onAddComment }) => {
  const posts = useStore((state) => state.posts);
  const editPost = useStore((state) => state.editPost);
  const [comment, setComment] = useState('');
  const [editingPostId, setEditingPostId] = useState<number | null>(null);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');

  const handleAddComment = (postId: number) => {
    onAddComment(postId, comment);
    setComment('');
  };

  const handleEditClick = (postId: number, title: string, content: string) => {
    setEditingPostId(postId);
    setNewTitle(title);
    setNewContent(content);
  };

  const handleSaveClick = (postId: number) => {
    editPost(postId, { title: newTitle, content: newContent });
    setEditingPostId(null);
};

  return (
    <div>
      {posts.map((post) => (
        <PostContainer key={post.id}>
          {editingPostId === post.id ? (
            <>
              <input value={newTitle} onChange={e => setNewTitle(e.target.value)} />
              <textarea value={newContent} onChange={e => setNewContent(e.target.value)} />
              <button onClick={() => handleSaveClick(post.id)}>Save</button>
            </>
          ) : (
            <>
              <PostTitle>{post.title}</PostTitle>
              <PostContent>{post.content}</PostContent>
              <button onClick={() => handleEditClick(post.id, post.title, post.content)}>Edit</button>
              <button onClick={() => onDeletePost(post.id)}>Delete</button>
              <button onClick={() => handleAddComment(post.id)}>Add Comment</button>
              <textarea value={comment} onChange={e => setComment(e.target.value)} />
              {post.comments?.map((comment, index) => (
                <p key={index}>{comment.content}</p>
              ))}
            </>
          )}
        </PostContainer>
      ))}
    </div>
  );
};

export default PostList;