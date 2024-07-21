const output = document.querySelector('#output');
const Btn = document.querySelector('#get-posts-btn');

// get and show posts 
async function showPosts() {
    try {
        
        const res = await fetch('http://localhost:8000/api/posts');
    if(!res.ok){
        throw new Error('Failed to fetch Post');
    }

    const posts= await res.json();
    output.innerHTML= '';


    posts.forEach((post) => {
        const PostEL= document.createElement('div');
        PostEL.textContent = post.title;
        output.appendChild(PostEL);
    })
    } catch (error) {
        console.log('Error Fetching posts:', error);
        
    }
    

}


// submit new post 
async function addPost(e) {
    e.preventDefault();
    const formData = new FormData(this);
    const title = formData.get('title');
  
    try {
      const res = await fetch('http://localhost:8000/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title }),
      });
  
      if (!res.ok) {
        throw new Error('Failed to add post');
      }
  
      const newPost = await res.json();
  
      const postEl = document.createElement('div');
      postEl.textContent = newPost.title;
      output.appendChild(postEl);
      showPosts();
    } catch (error) {
      console.error('Error adding post');
    }
  }
  

Btn.addEventListener('click', showPosts);