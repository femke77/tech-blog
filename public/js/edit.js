const post_id = document.querySelector('#post_id').value.trim();
const editFormHandler = async (event) => {
    event.preventDefault();
  
    
    const title = document.querySelector('#title').value.trim();
    const body = document.querySelector('#body').value.trim();
  
    if (title && body) {
      const response = await fetch(`/api/post/${post_id}`, {
        method: 'Put',
        body: JSON.stringify({ title, body }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to update post');
      }
    }
  };

  document
  .querySelector('.edit-post-form')
  .addEventListener('submit', editFormHandler);