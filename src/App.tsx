// src/App.tsx
import React from 'react';
import AddPostForm from './components/AddPostForm';
import PostList from './components/PostList';
import { useStore } from './store/store'; 

function App() {
  const addPost = useStore((state) => state.addPost);
  const editPost = useStore((state) => state.editPost);
  const deletePost = useStore((state) => state.deletePost);
  const addComment = useStore((state) => state.addComment);

  return (
    <div className="App">
      <header className="App-header">
        <AddPostForm onAddPost={({ title, content }) => addPost(title, content)} />
        <PostList onDeletePost={deletePost} onAddComment={addComment} />
      </header>
    </div>
  );
}

export default App;