const Renderer = function(){

    const renderPosts = function(posts){
        $("#posts").empty();

        for(let post of posts){
            
            let newPost = document.createElement("div") // dynamically creating an element            
            
            newPost.setAttribute("class", "post")
            newPost.setAttribute("data-id",post.id)
            
            let postText = document.createElement("div")
            postText.setAttribute("class","post-text")
            postText.innerText = post.text

            newPost.appendChild(postText)

            let comments = document.createElement("div")
            comments.setAttribute("class","comments")
            renderComments(post,comments);

            newPost.appendChild(comments)
            let footer = document.createElement("div")
            footer.setAttribute("class","footer")

            let commentInput = document.createElement("input")
            commentInput.setAttribute("id","commentInput")

            let addCommentBtn = document.createElement("button")
            addCommentBtn.setAttribute("class","comment")
            addCommentBtn.innerText = "Comment"

            let deletePostBtn = document.createElement("button")
            deletePostBtn.setAttribute("class","delete-post")
            deletePostBtn.innerText = "Remove Post"
            
            footer.appendChild(commentInput)
            footer.appendChild(addCommentBtn)
            footer.appendChild(deletePostBtn)

            newPost.appendChild(footer)
           
            $("#posts").append(newPost)

        }
    }
    const renderComments = function(post,commentsDiv){
        let comments = ""
           
        for(let comment of post.comments){
            
            let deleteComment = document.createElement("span")
            deleteComment.setAttribute("class","delete-comment")
            deleteComment.innerText = " X "

            let newcomment = document.createElement("div")
    

            newcomment.setAttribute("class", "comment")
            newcomment.setAttribute("data-id",comment.id)
            newcomment.append(deleteComment)

//             newcomment.innerHTML += deleteComment
            newcomment.innerHTML += comment.text
            
            commentsDiv.append(newcomment)
        }
    }
    
    return{renderPosts: renderPosts,
        renderComments:renderComments
    }

}

