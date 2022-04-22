const posts = [
    {id:1,desc:'first post'},
    {id:2,desc:'second post'},
    {id:3,desc:'third post'}
]

const listPosts = () =>{
    posts.map((post)=>{
        console.log(post)
    })
}

const addNewPost = (post,callback) => {
     posts.push(post);
     callback();
}

addNewPost({id:4,desc:'fourth post'},listPosts);