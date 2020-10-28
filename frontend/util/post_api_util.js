export const fetchAllPosts = () => {
    return $.ajax({
        method:'GET',
        url: '/api/posts',
    })
};


export const fetchSinglePost = (postId) => {
    return $.ajax({
        method:'GET',
        url: `/api/posts/${postId}`
    })
};

export const createPost = (formData) => {
    return $.ajax({
        method:'POST',
        url:'/api/posts',
        data: formData,
        contentType: false,
        processData: false
    })
};


export const updatePost = formData => {
    debugger
    return $.ajax({
        method:'PATCH',
        url: `/api/posts/${formData.getAll("post[id]")[0]}`,
        data: formData,
        contentType: false,
        processData: false
    })
};

export const deletePost = postId => {
    return $.ajax({
        method:'DELETE',
        url:`/api/posts/${postId}`
    })
};