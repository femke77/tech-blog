const post_id = document.querySelector('input[name="post-id"]').value;

const editFormHandler = async (event) => {
    event.preventDefault();
  
    
    const title = document.querySelector('#title').value.trim();
    const body = document.querySelector('#body').value.trim();
  
    if (title && body) {
      const response = await fetch(`/api/post/${post_id}`, {
        method: 'PUT',
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

  const deleteClickHandler = async function() {
    await fetch(`/api/post/${post_id}`, {
      method: 'DELETE'
    });
  
    document.location.replace('/dashboard');
  };

  document
  .querySelector('#edit-post-form')
  .addEventListener('submit', editFormHandler);

  document
  .querySelector('#delete-btn')
  .addEventListener('click', deleteClickHandler);