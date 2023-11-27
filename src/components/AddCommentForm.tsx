import React, { useState } from 'react';
import { Form, TextArea, SubmitButton } from './AddCommentForm_Styles';

const AddCommentForm: React.FC = () => {
  const [comment, setComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your logic to add the comment
  };

  return (
    <Form onSubmit={handleSubmit}>
      <TextArea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Add a comment"
      />
      <SubmitButton type="submit">Add Comment</SubmitButton>
    </Form>
  );
};

export default AddCommentForm;