const Tweeter = function () {
    const _posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]
    let postIdCounter = 2;
    let commentIdCounter = 6

    const getPosts = () => _posts
    
    const addPost = function(twit){
        let newPost = {text:twit,id:"p"+ ++postIdCounter,comments:[]}
        _posts.push(newPost);
        return true;
    }
    const removePost = function(postId){
        let i=0;
        for (let post of getPosts()) {
            
            if(post.id == postId){
                _posts.splice(i,1);
                return true;
            }
            i++;
        }
        return false;
    }

    const addComment = function(text,postId){
        for (let p of getPosts()) {
            if(p.id === postId){
                let newComment = {id:"c"+ ++commentIdCounter,text:text}
                p.comments.push(newComment)
                return true;
            }
        }
        return false;
    }

    const removeComment = function(postId,commentId){
        for (let post of getPosts()) {
            if(post.id===postId){
                let i=0
                for (let comment of post.comments) {
                    if(comment.id === commentId){
                        post.comments.splice(i,1)
                        return true;
                    }
                    i++;
                }
            }
        }
        return false;
    }

    const getComments = function(post){
        return post.comments;
    }
    return {
        getPosts: getPosts,
        addPost: addPost,
        removePost : removePost,
        getComments : getComments,
        addComment : addComment,
        removeComment : removeComment
    }
}
