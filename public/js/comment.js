const commentFormHandler = async (event) => {
    event.preventDefault();
  
    
    const post_id = document.querySelector('#post_id').value.trim();
    const body = document.querySelector('#body').value.trim();
  
    if (post_id && body) {
      const response = await fetch(`/api/comment`, {
        method: 'POST',
        body: JSON.stringify({ post_id, body }),
        headers: {
          'Content-Type': 'application/json',
        },

      });

      if (response.redirected) {
        document.location.assign(response.url)  // this is /login homeroute -force the browser to pick up the change
      }else if(response.ok){
        document.location.reload()  
      }
       else {
        alert('Failed to create comment');
      }
    }
  };
  
  
  
  document
    .querySelector('#new-comment-form')
    .addEventListener('submit', commentFormHandler);