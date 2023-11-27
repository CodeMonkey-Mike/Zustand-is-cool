import create from 'zustand';

interface Post {
  id: number;
  title: string;
  content: string;
  comments: Comment[];
}

interface Comment {
  id: number;
  content: string;
}

interface StoreState {
  posts: Post[];
  addPost: (title: string, content: string) => void;
  editPost: (postId: number, postData: {title: string, content: string}) => void;  deletePost: (id: number) => void;
  addComment: (postId: number, content: string) => void;
  deleteComment: (postId: number, commentId: number) => void;
}

export const useStore = create<StoreState>((set) => ({
  // initial state
  posts: [],

  // methods to update state
  addPost: (title, content) =>
    set((state) => ({
      posts: [
        ...state.posts,
        { id: Date.now(), title, content, comments: [] },
      ],
    })),
    editPost: (postId, postData) => set((state) => ({
        posts: state.posts.map((post) => post.id === postId ? { ...post, title: postData.title, content: postData.content } : post)
      })),
  deletePost: (id) =>
    set((state) => ({
      posts: state.posts.filter(post => post.id !== id),
    })),
  addComment: (postId, content) =>
    set((state) => ({
      posts: state.posts.map(post =>
        post.id === postId
          ? { ...post, comments: [...post.comments, { id: Date.now(), content }] }
          : post
      ),
    })),
  deleteComment: (postId, commentId) =>
    set((state) => ({
      posts: state.posts.map(post =>
        post.id === postId
          ? { ...post, comments: post.comments.filter(comment => comment.id !== commentId) }
          : post
      ),
    })),
}));
