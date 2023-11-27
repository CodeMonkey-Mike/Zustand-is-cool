
import React, { useState } from 'react';
import { Form, Input, TextArea, SubmitButton } from './AddPostForm_Styles';

interface AddPostFormProps {
  onAddPost: (input: AddPostInput) => void;
}

interface AddPostInput {
  title: string;
  content: string;
}

const AddPostForm: React.FC<AddPostFormProps> = ({ onAddPost }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      onAddPost({ title, content });
    };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <TextArea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
      />
      <SubmitButton type="submit">Add Post</SubmitButton>
    </Form>
  );
};

export default AddPostForm;