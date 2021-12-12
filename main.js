const tweeter = Tweeter()
const renderer = Renderer()

let posts = tweeter.getPosts()
renderer.renderPosts(posts)

const addPost = function(){
    let text = $("#postInput").val();
    if(text.length === 0)    return;
    tweeter.addPost(text)
    renderer.renderPosts(posts)
} 
$("#post").on("click",addPost)

$('#posts').on('click', '.delete-post', function(){
    const postToDelete = $(this).closest('.post').data().id
    tweeter.removePost(postToDelete)
    renderer.renderPosts(posts)
})

$('#posts').on('click', '.comment', function(){
    const postID = $(this).closest('.post').data().id
    const newComment = $(this).closest('.post').find('#commentInput').val()
    $('#commentInput').val("")
    if(newComment.length === 0)    return;
    tweeter.addComment(newComment, postID)
    renderer.renderPosts(posts)
})

$('#posts').on('click', '.delete-comment', function(){
    const postID = $(this).closest('.post').data().id
    const commentToDeleteID = $(this).closest('div').data().id
    tweeter.removeComment(postID, commentToDeleteID)
    renderer.renderPosts(posts)   
})





