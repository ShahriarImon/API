fetch("https://jsonplaceholder.typicode.com/users")
.then(Response => Response.json())
.then(data => displayUsers(data))
.catch(error => console.log(error))

const ul = document.getElementById('allUserId')

function displayUsers(albums){
    const album = albums.map(element => element.company.name);
    for(const i of album){
        const li = document.createElement('li');
        li.innerText = i;
        ul.appendChild(li);
    }
    
}

const inpTitle = document.getElementById('title');
const inpBody = document.getElementById('body');
const inpAge = document.getElementById('age');
const submit = document.getElementById('submit');
submit.addEventListener('click', function(){

    
    const post = {
        title : inpTitle.value,
        body : inpBody.value,
        age : inpAge.value,
    };
    postToServer(post);
})


function postToServer(postInfo){
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(postInfo),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
}
