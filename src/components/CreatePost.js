import React from 'react';

function CreatePost() {
  const [content, setContent] = React.useState('');
  const [image, setImage] = React.useState(null);

  return (
    <div>
      <h1>Create New Post</h1>
      <form>
        <input
          type='text'
          placeholder='Add Post Content'
          onChange={event => setContent(event.target.value)}
        />
        <input
          type='file'
          onChange={event => setImage(event.target.files[0])}
        />
        <button type='submit'>Submit Post</button>
      </form>
      <p>{content}</p>
      {image && <img
        style={{ height: 200, width: 300, objectFit: 'cover' }}
        src={URL.createObjectURL(image)}
        alt='N/A'
      />}
    </div>
  );
}

export default CreatePost;
