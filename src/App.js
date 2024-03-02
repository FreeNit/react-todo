import { useState } from 'react';

import Counter from './components/Counter';

import './styles/App.css';
import PostList from './components/PostList';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript 1', body: 'Description' },
    { id: 2, title: 'JavaScript 2', body: 'Description' },
    { id: 3, title: 'JavaScript 3', body: 'Description' },
  ]);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    console.log(e.target.value);
    setDescription(e.target.value);
  };

  const addNewPost = (e) => {
    e.preventDefault();
  };

  return (
    <div className='App'>
      <form>
        <MyInput
          type='text'
          placeholder='Post title'
          value={title}
          onChange={(e) => handleTitleChange(e)}
        />

        <MyInput
          type='text'
          placeholder='Post description'
          onChange={(e) => handleDescriptionChange(e)}
        />

        <MyButton onClick={addNewPost}>Create Post</MyButton>
      </form>
      <PostList posts={posts} title={'List of Posts'} />
    </div>
  );
}

export default App;
